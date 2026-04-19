import React from 'react'
import './modal.css'
import CloseIcon from '@mui/icons-material/Close';
const Modal = (props) => {
  const header = props.header ? props.header : "Model";
  const children = props.children ? props.children : null;
  const onCloseBtn = () => {
    if (props.handleClose) {
      props.handleClose(props.value)
    }
  }

  return (
    <div className='modal'>
      <div className="modal-card">
        <div className="modal-card-header">
          <div className='modal-card-header-title'>{header}</div>
          <div style={{ cursor: "pointer" }} onClick={onCloseBtn}> <CloseIcon sx={{ fontSize: 28 }} /> </div>
          {/* Inline css above also there is fontsize changed of material ui icon */}
        </div>

        <div className="modal-content">
          {children}
        </div>
        
      </div>
    </div>
  )
}

export default Modal
