const UserModels = require("../Models/user");
const bcryptjs = require("bcryptjs");
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
      return res.json({
        message : "Login successful",
        success : "yes",user :  isExist})
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