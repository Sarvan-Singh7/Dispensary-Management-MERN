const mongoose = require('mongoose');
const MedicineSchema = new mongoose.Schema({
   name : {
    type : String,
   },
   quantity : {
    type : String,
   },
   usage : {
    type : String,
   },
   addedBy : {   // this field will store the id of the user who added the medicine from user collection
    type : mongoose.Schema.Types.ObjectId,
    ref: "user",
    required : true
   }
}, {timestamps: true});

const medicineModel = mongoose.model("medicine", medicineSchema);
module.exports = medicineModel;