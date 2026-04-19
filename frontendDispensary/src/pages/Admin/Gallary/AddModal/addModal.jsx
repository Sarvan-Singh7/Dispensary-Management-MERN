import React, { useState } from 'react'
import './addModal.css'
import axios from 'axios';///used for API call
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
//Axios helps your website talk to the backend or API.
const AddModal = (props) => {
  const [image, setImage] = useState(null);
  const [loader, setLoader] = useState(false);///for loading.

  const uploadImage = async (e) => {
    const file = e.target.files;
    const data = new FormData();
    data.append("file", file[0]);///append image
    data.append('upload_preset', "college_dispensary");
    setLoader(true);
    try {
      ///api call to post
      const response = await axios.post("https://api.cloudinary.com/v1_1/dqnmeq2lt/image/upload", data);
      const imageUrl = response.data.url;
      setImage(imageUrl);//store url
    } catch (error) {
      console.log(error)
    } finally {
      setLoader(false);//at last make loader false
    }
  }
  return (
    <div className='addModal'>
      <div className='addModal-card'>
        <div>Add Image</div>
        <div className='modal-add-btns'>
          {/* //onClose come from adminGallery so when we do click on cancel button then Upload modal dissapear */}
          <div className='cancel-modal-btn' onClick={() => props.onClose()}>Cancel</div>
          {/* ///Input for uploading files and accept = image set so we can upload only images*/}
          <label htmlFor="fileInput" className='cancel-modal-btn'>Upload</label>
          <input type="file" id="fileInput" accept='image/*' className='cancel-file' onChange={(e) => { uploadImage(e) }} />
        </div>

        {loader && <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>}
        {
          image && <img src={image} style={{ marginTop: 20, width: "200px", height: "200px" }} />
        }
        {
          image && <div className='cancel-modal-btn'>Submit</div>
        }
      </div>
    </div>
  )
}

export default AddModal

// preset-name=college_dispensary
// cloudname= dqnmeq2lt
