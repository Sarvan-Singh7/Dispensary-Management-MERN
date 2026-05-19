import React, { use, useState } from 'react'
import './manageEvent.css'
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { useEffect } from 'react';
import { toast ,ToastContainer} from 'react-toastify';
const ManageEvent = (props) => {
    const [title, setTitle] = useState("");
    const [data,setData] = useState([]);
    const fetchData=async()=>{
        props.showLoader();
        await axios.get('http://localhost:4000/api/notification/get').then((resp)=>{
            // console.log(resp);
            setData(resp.data.notifications);
        }).catch((err)=>{
            toast.error(err?.response?.data?.error);
        }).finally(()=>{
            props.hideLoader();
        })
    }
    useEffect(()=>{
        fetchData();
    }, [])
    const handleSubmitEvent=async(e)=>{
        e.preventDefault();
        // Handle event submission logic here
        if(title.trim().length===0)return toast.error("Please Enter Title");
        props.showLoader();
        await axios.post('http://localhost:4000/api/notification/add', {title},{withCredentials:true}).then((resp)=>{
            // console.log(resp);
            setData([resp.data.notification,...data]);
            setTitle("");
            toast.success("Event Added Successfully");
        }).catch((err)=>{
            toast.error(err?.response?.data?.error);
        }).finally(()=>{
            props.hideLoader();
        })
    }
    const filterOutEvent=(id)=>{
        let newArr=data.filter((item)=>item._id!==id);
        setData(newArr);
    }
    const handleDeleteEvent=async(id)=>{
        props.showLoader();
        await axios.delete(`http://localhost:4000/api/notification/delete/${id}`,{withCredentials:true}).then((resp)=>{
            // console.log(resp);
            filterOutEvent(id);
            toast.success("Event Deleted Successfully");
        }).catch((err)=>{
            toast.error(err?.response?.data?.error);
        }).finally(()=>{
            props.hideLoader();
        })
    }
    return (
        <div className='add-staffs-box'>
            <form onSubmit={handleSubmitEvent} className='register-form'>
                <div className="">
                    <div className="register-input-box">
                        <input value={title} onChange={(event) => { setTitle(event.target.value) }} type="text" className="input-box-register mngEventInp" placeholder='Add Event' />
                    </div>
                </div>
                <button type='submit' className="form-btn reg-btn">Add</button>
            </form>

            <div className="list-staffs">
                
                {
                    data.map((item,index)=>{
                        return (
                            <div className="list-staff">
                                <div>{item.title.slice(0, 20)}...</div>
                                <div className="list-staff-btns">
                                    <div onClick={()=>handleDeleteEvent(item._id)} style={{ cursor: "pointer" }}><DeleteIcon /></div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <ToastContainer/>
        </div>
    )
}

export default ManageEvent
