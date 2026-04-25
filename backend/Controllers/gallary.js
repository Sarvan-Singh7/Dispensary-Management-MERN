const GallaryModel= require('../Models/gallary')

exports.addImage = async (req, res) => {
try{
const {link} = req.body;
const gallary = new GallaryModel({link, addedBy : req.user._id});
await gallary.save();
res.status(200).json({
    message : "Gallary Added Successfully",
    gallary
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


exports.getAllGallary = async (req, res) => {
try{
const images= await GallaryModel.find()
return res.status(200).json({
    message : "Gallary Retrieved Successfully",
    images
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

exports.deleteImageById = async (req, res) => {
    try {
        const { id } = req.params;
       const image= await GallaryModel.findByIdAndDelete(id);
        if (image) {
            return res.status(200).json({
                message: "Image Deleted Successfully"
            });
        }
        return res.status(404).json({
            error: "Image Not Found"
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error : "Something went Wrong",
            issue : err.message
        });
    }
};
