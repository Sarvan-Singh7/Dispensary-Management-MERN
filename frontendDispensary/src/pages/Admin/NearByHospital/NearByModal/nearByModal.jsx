import React, { useState } from 'react'
import './nearByModal.css'
const NearByModal = () => {

    const [inputField, setInputField] = useState({ name: "", address: "", contact: "" })
    const handleOnChange = (event, key) => {
        setInputField({ ...inputField, [key]: event.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
    }
    return (
        <form className="register-form" onSubmit={handleSubmit}>
            <div className="register-form-div">
                <div className="register-input-box">
                    <input value={inputField.name} onChange={(event) => { handleOnChange(event, 'name') }} type="text" className="input-box-register" placeholder='Name' />

                </div>
                <div className="register-input-box">
                    <input value={inputField.address} onChange={(event) => { handleOnChange(event, 'address') }} type="text" className="input-box-register" placeholder='Address' />

                </div>
                <div className="register-input-box">
                    <input value={inputField.contact} onChange={(event) => { handleOnChange(event, 'contact') }} type="text" className="input-box-register" placeholder='Contact Number' />

                </div>



            </div>
            <button type='submit' className="form-btn reg-btn">Add</button>


        </form>
    )
}

export default NearByModal
