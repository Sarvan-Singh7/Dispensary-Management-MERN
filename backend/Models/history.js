const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
    roll : {
      type : String,
    },
    student: {       //also referring to userModel, because we need to know which student took the medicine
      type : mongoose.Schema.Types.ObjectId,
      ref : "user",
      required: true,
    },
    medicines : [   //making array of medicines, because one student can take multiple medicines at a time, and we also need to know the quantity of each medicine taken by the student
      {
        name : {
          type : String,
        },
        requiredQuantity : {
          type : String,
        }
      }
    ]
}, {timestamps: true});

const historyModel = mongoose.model("history", historySchema);
module.exports = historyModel;