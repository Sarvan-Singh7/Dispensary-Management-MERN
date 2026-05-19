import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { toast ,ToastContainer} from 'react-toastify';
const DeleteModal = (props) => {
  const handleDelete=async()=>{
    if(props.clickedItem){
      await axios.delete(`http://localhost:4000/api/gallary/delete/${props.clickedItem._id}`,{withCredentials:true}).then((resp)=>{
        window.location.reload();
      }).catch((err)=>{
        toast.error(err?.response?.data?.error);
      });
    }
  }
  return (
    <div className='addModal'>
      <div className='addModal-card'>
        <div>Delete Image</div>
        <div className='modal-add-btns'>
            <div className='cancel-modal-btn' onClick={()=>props.onClose()}>Cancel</div>
            <div className='cancel-modal-btn' onClick={handleDelete} ><DeleteIcon/></div>

        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default DeleteModal;
