const MedicineModels = require("../Models/medicine");

exports.addMedicine = async (req, res) => {
    try{
const {name, quantity, usage} = req.body;
const medicine = new MedicineModels({name, quantity, usage, addedBy : req.user._id});
await medicine.save();
res.status(200).json({
    message : "Medicine Added Successfully",
    medicine
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

exports.getMedicine = async (req, res) => {
try{
    //if we dont write name then it will show all detials load will inc , so we will write name then it will show only name and id and rest details will not show
const medicines = await MedicineModels.find().populate("addedBy","name").sort({createdAt: -1});
return res.status(200).json({
    message : "Medicines Retrieved Successfully",
    medicines
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

exports.updateMedicineById = async (req, res) => {

try{
const {id}= req.params;
let body= {...req.body};
const medicine = await MedicineModels.findByIdAndUpdate(id,{...body,addedBy:req.user._id});
if(medicine){
    return res.status(200).json({
        message : "Medicine Updated Successfully"
    })
}
return res.status(404).json({
    error : "Medicine Not Found"
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

exports.searchMedicine = async (req, res) => {
try{
const {name} = req.query;
const medicines = await MedicineModels.find({name : {$regex : "^" + name, $options : "i"}}).populate("addedBy","name").sort({createdAt: -1});
return res.status(200).json({
    message : "Medicines Retrieved Successfully",
    medicines
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

exports.deleteMedicineById = async (req, res) => {

try{
const {id}= req.params;
const medicine = await MedicineModels.findByIdAndDelete(id);
if(medicine){
    return res.status(200).json({
        message : "Medicine Deleted Successfully"
    })
}
return res.status(404).json({
    error : "Medicine Not Found"
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
