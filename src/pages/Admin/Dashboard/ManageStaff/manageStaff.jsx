import React, { useState } from 'react'
import './manageStaff.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const ManageStaff = () => {
    const [inputField,setInputField]=useState({name:"",email:"",password:"",designation:"",mobileNo:""})
    const handleOnChange=(event,key)=>{
        setInputField({...inputField,[key]:event.target.value})
    }
    
  return (
    <div className='add-staffs-box'>
      <form className='register-form'>
        <div className="register-form-div">
            <div className="register-input-box">
                <input value={inputField.name} onChange={(event)=>{handleOnChange(event,'name')}} type="text" className="input-box-register" placeholder='Staff Name' />
            </div>
           <div className="register-input-box">
                <input value={inputField.email} onChange={(event)=>{handleOnChange(event,'email')}} type="text" className="input-box-register" placeholder='Email id' />
            </div>
            <div className="register-input-box">
                <input value={inputField.password} onChange={(event)=>{handleOnChange(event,'password')}} type="text" className="input-box-register" placeholder='password' />
            </div>
           <div className="register-input-box">
                <input value={inputField.designation} onChange={(event)=>{handleOnChange(event,'designation')}} type="text" className="input-box-register" placeholder='designation' />
            </div>
            <div className="register-input-box">
                <input value={inputField.mobileNo} onChange={(event)=>{handleOnChange(event,'mobileNo')}} type="text" className="input-box-register" placeholder='Mobile No' />
            </div>

        </div>
        <button type='submit' className="form-btn reg-btn">Add</button>
      </form>
      <div className="list-staffs">
        <div className="list-staff">
            <div>upiii</div>
            <div className="list-staff-btns">
                <div style={{cursor:"pointer"}}><EditIcon/></div>
                <div style={{cursor:"pointer"}}><DeleteIcon/></div>
            </div>
        </div>
        <div className="list-staff">
            <div>Shravann</div>
            <div className="list-staff-btns">
                <div style={{cursor:"pointer"}}><EditIcon/></div>
                <div style={{cursor:"pointer"}}><DeleteIcon/></div>
            </div>
        </div>
        <div className="list-staff">
            <div>Deepuuu</div>
            <div className="list-staff-btns">
                <div style={{cursor:"pointer"}}><EditIcon/></div>
                <div style={{cursor:"pointer"}}><DeleteIcon/></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ManageStaff
