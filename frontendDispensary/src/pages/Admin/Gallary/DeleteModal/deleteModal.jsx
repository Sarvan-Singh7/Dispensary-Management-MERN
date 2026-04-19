import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
const DeleteModal = (props) => {
  return (
    <div className='addModal'>
      <div className='addModal-card'>
        <div>Delete Image</div>
        <div className='modal-add-btns'>
            <div className='cancel-modal-btn' onClick={()=>props.onClose()}>Cancel</div>
            <div className='cancel-modal-btn'><DeleteIcon/></div>

        </div>
      </div>
    </div>
  )
}

export default DeleteModal;
