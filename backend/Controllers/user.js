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
   ///agar isExist ne null return kiya so store to DB

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

exports.updateStudentById = async(req, res) => {
  try{
const {id} = req.params;
const updateStudent = await UserModels.findByIdAndUpdate(id, req.body, {new : true}); //new true means that it will return the updated document instead of the old one
if(updateStudent){
 return res.status(200).json({ message : "Staff update successfully" });
}
return res.status(400).json({ error : "Student not found with this id" });
} 
  catch(err){
    console.log(err);
    res.status(500).json({
      error : "Something went Wrong",
      issue : err.message
    })
  }
}


exports.getStudentByRollNo = async(req, res) => {
  try{
    const {roll} = req.params;
    const student = await UserModels.findOne({roll});
    if(student){
      return res.status(200).json({message: "Student found", student });
    }
    return res.status(400).json({ error : "Student not found with this roll number" });
  } 
  catch(err){
    console.log(err); 
    res.status(500).json({
      error : "Something went Wrong",
      issue : err.message
    })
  }
}

//password is going to generate by backend and send to student by email , admin dont know about passsword

exports.registerStudentByStaff = async(req, res) => {
  try{
    
    const buffer = crypto.randomBytes(4); // Generate a random 4-byte buffer
let token= buffer.readInt32BE(0) % 900000 + 100000; // Convert buffer to a 6-digit number
 let {_id, ...body} = req.body;
const isExist = await UserModels.findOne({email : body.email});

if(isExist){
  return res.status(400).json({ error : "User already exists with this email" });
}
token= token.toString(); // Convert token to string before hashing

let updatedPass= await bcryptjs.hash(token, 10); // Hash the generated password before saving

const user = new UserModels({...body, password : updatedPass});
await user.save();
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Password for dispensary system',
      text: `Hi, your password is  ${token} whos email id is ${body.email} and roll number is ${body.roll} . Please change your password after login.`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        
        return res.status(500).json({ error: 'server error',errorMsg: error });
      } else {
        
        return res.status(200).json({ message: 'password sent to student email id' });
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


exports.addStaffByAdmin = async(req, res) => {
try{
const {name,email,password,designation,mobileNo}= req.body;
const searchStaff= await UserModels.findOne({email});
if(searchStaff){
  return res.status(400).json({ error : "User already exists with this email" });
}
let updatePass= await bcryptjs.hash(password, 10); // Hash the generated password before saving

const user= new UserModels({name,email,password : updatePass,designation,mobileNo,role : "staff"});
await user.save();

const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Password for dispensary system',
      text: `Hi, your password for Dispensary System is  ${password} whos email id is ${email} for staff portal`

    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        
        return res.status(500).json({ error: 'server error',errorMsg: error });
      } else {
        
        return res.status(200).json({ message: "password sent to staff email id" });
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


exports.getAllStaffs = async(req, res) => {
try{
const staffs= await UserModels.find({role : "staff"}); 
return res.status(200).json({ staffs });
}
catch(err){
    console.log(err); 
    res.status(500).json({
      error : "Something went Wrong",
      issue : err.message
    })
  }
}

exports.updateStaffById = async(req, res) => {

try{
const {id}= req.params;
const{ name,designation,mobileNo} = req.body;
const staff= await UserModels.findById(id);
if(staff){
staff.name= name 
staff.designation= designation 
staff.mobileNo= mobileNo
await staff.save();
return res.status(200).json({ message : "Staff updated successfully" });
}else{
return res.status(400).json({ error : "Staff not found with this id" });
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

exports.deleteStaff = async(req, res) => {
try{
const {id}= req.params
const deletedUser= await UserModels.findByIdAndDelete(id);
if(deletedUser){
return res.status(200).json({ message : "Staff deleted successfully" });
}else{
return res.status(400).json({ error : "Staff not found with this id" });
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


exports.logout = async(req, res) => {
res.clearCookie('token', cookieOptions).json({ message : "Logout successful" });

}