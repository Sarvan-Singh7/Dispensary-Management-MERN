import React, { useState } from 'react'
import './medicineModal.css';

const MedicineModal = () => {
    const [medicine, setMedicine] = useState({ name: "", quantity: "", usage: "" })
    const handleOnChange = (event, key) => {
        setMedicine({ ...medicine, [key]: event.target.value })
    }
    const handleSubmit = (e) => {   //as form so make a function to handle when submit
        e.preventDefault()//used to stop the browser's default action of submitting the form to a server and refreshing the page.      so that page baar bar refresh na ho submit karne par sir ji
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="register-form-div">
                <div className="register-input-box">
                    <input value={medicine.name} onChange={(event) => { handleOnChange(event, 'name') }} type="text" className="input-box-register" placeholder='Medicine Name' />

                </div>
                <div className="register-input-box">
                    <input value={medicine.quantity} onChange={(event) => { handleOnChange(event, 'quantity') }} type="email" className="input-box-register" placeholder='Quantity' />

                </div>
                <div className="register-input-box">
                    <input value={medicine.usage} onChange={(event) => { handleOnChange(event, 'usage') }} type="text" className="input-box-register" placeholder='Usage' />

                </div>
            </div>
            <button type='submit' className="form-btn reg-btn">Add</button>
        </form>
    )
}

export default MedicineModal;