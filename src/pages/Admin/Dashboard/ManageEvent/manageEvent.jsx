import React from 'react'
import './manageEvent.css'
import DeleteIcon from '@mui/icons-material/Delete';
const ManageEvent = () => {
  return (
       <div className='add-staffs-box'>
      <form className='register-form'>
        <div className="">
            <div className="register-input-box">
                <input type="text" className="input-box-register mngEventInp" placeholder='Staff Name' />
            </div>
        </div>
        <button type='submit' className="form-btn reg-btn">Add</button>
      </form>

          <div className="list-staffs">
        <div className="list-staff">
            <div>upiii ki shaaaadddddddddddii</div>
            <div className="list-staff-btns">
        
                <div style={{cursor:"pointer"}}><DeleteIcon/></div>
            </div>
        </div>
        </div>
      </div>
  )
}

export default ManageEvent
