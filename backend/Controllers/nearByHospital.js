const HospitalModels = require("../Models/nearByHospitals");

exports.addNearByHospital = async(req, res) => {

try{
const {name, address, contact} = req.body;
const hospital = new HospitalModels({name, address, contact, addedBy : req.user?._id});
await hospital.save();
return res.status(200).json({
    message : "Hospital Added Successfully",
    hospital
})
}

catch(err){
    console.log(err); 
    res.status(500).json({
      error : "Something went Wrong",
      issue : err.message
    })
  }

}

exports.getHospitals = async(req, res) => {
try{
const hospitals = await HospitalModels.find().populate("addedBy","name").sort({createdAt: -1});
return res.status(200).json({
    message : "Hospitals Retrieved Successfully",
    hospitals
})
}
catch(err){
    console.log(err); 
    res.status(500).json({
      error : "Something went Wrong",
      issue : err.message
    })
  }
}

exports.updateHospitalById = async(req, res) => {

try{
const {id}= req.params;
let body= {...req.body};
const hospital = await HospitalModels.findByIdAndUpdate(id,{...body,addedBy:req.user?._id});
if(hospital){
    return res.status(200).json({
        message : "Hospital Updated Successfully"
    })
}
return res.status(400).json({
    error : "Hospital Not Found"
})
}
catch(err){
    console.log(err); 
    res.status(500).json({
      error : "Something went Wrong",
      issue : err.message
    })
  }
}

exports.deleteHospitalById = async(req, res) => {

try{
const {id}= req.params;
const hospital = await HospitalModels.findByIdAndDelete(id);
if(hospital){
    return res.status(200).json({
        message : "Hospital Deleted Successfully"
    })
}
return res.status(400).json({
    error : "Hospital Not Found"
})
}
catch(err){
    console.log(err); 
    res.status(500).json({
      error : "Something went Wrong",
      issue : err.message
    })
  }


}