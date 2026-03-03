import React from 'react'
import './medicineModal.css';

 const MedicineModal = () => {
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="register-form-div">
                <div className="register-input-box">
                    <input type="text" className="input-box-register" placeholder='Medicine Name' />

                </div>
                <div className="register-input-box">
                    <input type="email" className="input-box-register" placeholder='Quantity' />

                </div>
                <div className="register-input-box">
                    <input type="text" className="input-box-register" placeholder='Useage' />

                </div>
            </div>
            <button type='submit' className="form-btn reg-btn">Add</button>
        </form>
    )
}

export default MedicineModal;