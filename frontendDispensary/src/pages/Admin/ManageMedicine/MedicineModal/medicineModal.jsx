import React, { useState,useEffect, use } from 'react'
import './medicineModal.css';
import { toast,ToastContainer } from 'react-toastify';
import axios from 'axios';
const MedicineModal = (props) => {
    const [medicine, setMedicine] = useState({ name: "", quantity: "", usage: "" })
    const handleOnChange = (event, key) => {
        setMedicine({ ...medicine, [key]: event.target.value })
    }
    useEffect(()=>{
        if(props.clickedMedicine){
            setMedicine({...medicine,name:props.clickedMedicine.name,quantity:props.clickedMedicine.quantity,usage:props.clickedMedicine.usage})
        }
    },[])
    const updateValue=async()=>{
        props.showLoader();
        await axios.put(`http://localhost:4000/api/medicine/update/${props.clickedMedicine._id}`, medicine,{withCredentials:true}).then((resp)=>{
            window.location.reload();
        }).catch((err)=>{
            toast.error(err?.response?.data?.error);
        }).finally(()=>{
            props.hideLoader();
        })
    }
    const handleSubmit = async(e) => {   
        e.preventDefault()//used to stop the browser's default action of submitting the form to a server and refreshing the page.      so that page baar bar refresh na ho submit karne par sir ji
        if(props.clickedMedicine){
            updateValue();
            return;
        }
        if(medicine.name.trim().length===0 || !medicine.quantity || medicine.usage.trim().length===0){
            return toast.error("Please Enter All Fields");
        }
        props.showLoader();
        await axios.post('http://localhost:4000/api/medicine/add', medicine,{withCredentials:true}).then((resp)=>{
            window.location.reload();
        }).catch((err)=>{
            toast.error(err?.response?.data?.error);
        }).finally(()=>{
            props.hideLoader();
        })
    }
   
    return (
        <form onSubmit={handleSubmit}>
            <div className="register-form-div">
                <div className="register-input-box">
                    <input value={medicine.name} onChange={(event) => { handleOnChange(event, 'name') }} type="text" className="input-box-register" placeholder='Medicine Name' />

                </div>
                <div className="register-input-box">
                    <input value={medicine.quantity} onChange={(event) => { handleOnChange(event, 'quantity') }} type="number" className="input-box-register" placeholder='Quantity' />

                </div>
                <div className="register-input-box">
                    <input value={medicine.usage} onChange={(event) => { handleOnChange(event, 'usage') }} type="text" className="input-box-register" placeholder='Usage' />

                </div>
            </div>
            <button type='submit' className="form-btn reg-btn">{props.clickedMedicine ? "Update" : "Add"}</button>
            <ToastContainer/>
        </form>
    )
}

export default MedicineModal;