import React from 'react'
import './addModal.css'
const AddModal = (props) => {
  return (
    <div className='addModal'>
      <div className='addModal-card'>
        <div>Add Image</div>
        <div className='modal-add-btns'>
            <div className='cancel-modal-btn' onClick={()=>props.onClose()}>Cancel</div>

            <label htmlFor="fileInput" className='cancel-modal-btn'>Upload</label>
            <input type="file" id="fileInput" accept='image/*' className='cancel-file' />
        </div>
      </div>
    </div>
  )
}

export default AddModal
