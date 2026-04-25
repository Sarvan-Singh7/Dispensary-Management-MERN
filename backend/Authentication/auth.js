const jwt = require("jsonwebtoken");


//importing this ..
const userModel = require("../Models/user");

exports.studentAuth = async(req, res, next)=> {
   try{
    const token = req.cookies.token; // Assuming the token is stored in a cookie named 'token'
    if(token){

      const  decode = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await userModel.findById(decode.userId).select("-password"); // Fetch user details from DB and attach to req object, excluding password
      next();
    }
   }
   catch(err){
      res.status(401).json({error :"Something Went Wrong in Authentication"});
   }
}


exports.adminFacultyAuth = async(req, res, next)=> {
   try{
    const token = req.cookies.token; // Assuming the token is stored in a cookie named 'token'
    if(token){

      const  decode = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await userModel.findById(decode.userId).select("-password"); // Fetch user details from DB and attach to req object, excluding password
      
      if(req?.user?.role === "student"){  // Check if the user's role is "student" so not to login to admin/staff dashboard
        throw new Error("Unauthorized Access");
      }

      next();
    }

   }
   catch(err){
      res.status(401).json({error :"Something Went Wrong in Authentication"});
   }
}
