const UserModels = require("../Models/user");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const nodemailer = require("nodemailer");


const cookieOptions = {   // Options for cookie settings
  httpOnly : true,
  secure : false, // Set to true in production when using HTTPS
  sameSite : "lax", // Adjust as needed (e.g., "strict" or "none")
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL, // Your email address
    pass: process.env.EMAIL_PASSWORD // Your email password or app password
  }

})


exports.register = async(req, res) => {
   try{
    const {name, email, password, roll} = req.body;
    const isExist = await UserModels.findOne({email});

    if(isExist){ //isExist ne agar Object return kiya so user already Exists so no need to add it and end from here
      return res.status(400).json({
        error : "User already exists with this email"
      })
    }

    const hashedPassword = await bcryptjs.hash(password, 10); //hashing the password before storing it in DB and 10 means number of rounds
   ///agar isExist ne null return kiya o store to DB

    const user = new UserModels({name, email, password : hashedPassword, roll});   ///see password hashed by this
    
    await user.save();
    res.status(201).json({
      message : "User registered successfully",
      success : "yes",
      data : user
    });
    
   }catch(err){
    console.log(err);
    res.status(500).json({
      error : "Something went Wrong",
      issue : err.message
    })
   }
}

exports.login = async(req, res) => {
  try{
     const {email, password} = req.body;
     const isExist = await UserModels.findOne({email});

     if(isExist && await bcryptjs.compare(password, isExist.password)){

      const token = jwt.sign({ userId : isExist._id}, process.env.JWT_SECRET); //generating token with payload as userId and secret key as userId is used to identify the user and secret key is used to sign the token

      res.cookie('token', token, cookieOptions);   //storing it to browser cookie with name token and value token and options defined above

      return res.json({
        message : "Login successful",
        success : "yes",
        user :  isExist,
        token})
     }else{
      return res.status(400).json({
        error : "Invalid email or password"
      })

     }
  }
  catch(err){
    console.log(err);
    res.status(500).json({
      error : "Something went Wrong",
      issue : err.message
    })
  }
}



exports.sendOtp = async(req, res) => {
  try{

    const {email} = req.body;
    const user = await UserModels.findOne({email});
    if(!user){
      return res.status(400).json({ error : "User not found with this email" });

    }

    const buffer = crypto.randomBytes(4); // Generate a random 4-byte buffer
    const token = buffer.readInt32BE(0) % 900000 + 100000; // Convert buffer to a 6-digit number

    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000; // Set token expiry time to 1 hour from now
    await user.save();

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Password Reset',
      text: `Your OTP for password reset is: ${token}. It will expire in 1 hour.`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ error: 'Failed to send OTP email' });
      } else {
        
        return res.status(200).json({ message: 'OTP sent to email successfully' });
      }

  });
  }
  catch(err){
    console.log(err);
    res.status(500).json({
      error : "Something went Wrong",
      issue : err.message
    })
  }
}



///it is time to verify the otp sent to email by user and if it is correct then allow user to reset password
exports.verifyOtp = async(req, res) => {
  try{
    const {email, otp} = req.body;
    //now time to verify that otp mathed or not and also check that otp is not expired
    const user = await UserModels.findOne({email, resetPasswordToken : otp, resetPasswordExpires : { $gt : Date.now() } }); //find user with email and otp and also check that otp is not expired

    if(!user){
      return res.status(400).json({ error : "Invalid OTP or OTP has expired" });
    }
    return res.status(200).json({ message : "OTP verified successfully, you can now reset your password" });

  }
  catch(err){
    console.log(err);
    res.status(500).json({
      error : "Something went Wrong",
      issue : err.message
    })
  }
}



exports.resetPassword = async(req, res) => {
  try{

    const { email, newPassword } = req.body;

        const user = await UserModels.findOne({ email });
        if (!user) {
          return res.status(400).json({ error: "User not found with this email" });
        }
        let updatedPassword = await bcryptjs.hash(newPassword, 10); // Hash the new password before saving
        user.password = updatedPassword;
        user.resetPasswordToken = undefined; // Clear the reset token
        user.resetPasswordExpires = undefined; // Clear the token expiry time
        await user.save();
        res.status(200).json({ message: "Password Reset Successfully" })
  }
  catch(err){
    console.log(err);
    res.status(500).json({
      error : "Something went Wrong",
      issue : err.message
    })
  }
}