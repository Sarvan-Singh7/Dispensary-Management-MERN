import React, { useState } from 'react'
import './registerStudent.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import SearchBox from '../../../components/SearchBox/searchBox';
import Modal from '../../../components/Modal/modal';
import Report from './Report/report';  ///used to add Report By Admin for User
import {toast,ToastContainer} from 'react-toastify'
import axios from 'axios';
const RegisterStudent = (props) => {

    const [searchStudent, setSearchStudent] = useState("");
    const [reportModal, setReportModal] = useState(false);

    const [studentDetail, setStudentDetail] = useState({ _id: "", email: "", name: "", roll: "", mobileNo: "", fatherName: "", fatherMobile: "", address: "", previous_health: "", age: "", bloodGroup: "" })
    const handleOnChangeInputField = (event, key) => {
        setStudentDetail({ ...studentDetail, [key]: event.target.value })
    }
    const openCloseModal = () => {   /////By this Close and Open ho jata hai
        setReportModal(prev => !prev)
    }

    const handleOnChange = (value) => {
        setSearchStudent(value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    //serach by rool no and get detials
    const handleSearch= async()=>{
       if(searchStudent.trim().length===0) return toast.error("Please enter Roll No to search")
        props.showLoader()
    await axios.get(`http://localhost:4000/api/auth/get-student-by-roll/${searchStudent}`,{withCredentials:true}).then(res=>{
console.log(res)
toast.success(res.data.message)

setStudentDetail({...studentDetail,...res.data.student})
    }).catch(err=>{
        setStudentDetail({ _id: "", email: "", name: "", roll: "", mobileNo: "", fatherName: "", fatherMobile: "", address: "", previous_health: "", age: "", bloodGroup: "" })
            toast.error(err?.response?.data?.error);
    }).finally(()=>{
        props.hideLoader()
    })
     }

      //we update data in this
     const handleUpdateFunc=async()=>{
        if(studentDetail.name.trim().length===0 || studentDetail.email.trim().length===0 || studentDetail.roll.trim().length===0 || studentDetail.mobileNo.trim().length===0) return toast.error("Name, Email, Roll No and Mobile No are required fields")
        props.showLoader()
const {_id,uodateAt,...student}= {...studentDetail}
await axios.put(`http://localhost:4000/api/auth/update-student/${_id}`,student,{withCredentials:true}).then(res=>{
toast.success(res.data.message)
}).catch(err=>{
    toast.error(err?.response?.data?.error);
}).finally(()=>{
    props.hideLoader()
})
     }

 //register student if not 
     const resgisterStudent=async()=>{
if(studentDetail.name.trim().length===0 || studentDetail.email.trim().length===0 || studentDetail.roll.trim().length===0 || studentDetail.mobileNo.trim().length===0) return toast.error("Name, Email, Roll No and Mobile No are required fields")
props.showLoader()
await axios.post("http://localhost:4000/api/auth/registerStudentByStaff",studentDetail,{withCredentials:true}).then(res=>{
toast.success(res.data.message)
}).catch(err=>{
setStudentDetail({ _id: "", email: "", name: "", roll: "", mobileNo: "", fatherName: "", fatherMobile: "", address: "", previous_health: "", age: "", bloodGroup: "" })
toast.error(err?.response?.data?.error);
}).finally(()=>{
    props.hideLoader()
})
     }




    return (
        <div className="register-student">
            {/* to do back to dashboard or undo */}
            <div className="go-back"><Link to={'/admin/dashboard'}><ArrowBackIcon /> Back to Dashboard</Link></div>

            <SearchBox handleClick={handleSearch} placeholder={"Search By Roll No"} value={searchStudent} onChange={handleOnChange} />

            <div className="register-form-block">
                <div className="register-form-header">Register Student</div>
                <form className="register-form" onSubmit={handleSubmit}>
                    <div className="register-form-div">
                        <div className="register-input-box">
                            <input value={studentDetail.name} onChange={(event) => { handleOnChangeInputField(event, 'name') }} type="text" className="input-box-register" placeholder='Student Name' />

                        </div>
                        <div className="register-input-box">
                            <input disabled={studentDetail?._id} value={studentDetail.email} onChange={(event) => { handleOnChangeInputField(event, 'email') }} type="email" className="input-box-register" placeholder='Email' />

                        </div>
                        <div className="register-input-box">
                            <input value={studentDetail.roll} onChange={(event) => { handleOnChangeInputField(event, 'roll') }} type="text" className="input-box-register" placeholder='Roll No' />

                        </div>
                        <div className="register-input-box">
                            <input value={studentDetail.mobileNo} onChange={(event) => { handleOnChangeInputField(event, 'mobileNo') }} type="text" className="input-box-register" placeholder='Mobile No' />
                        </div>

                        <div className="register-input-box">
                            <input value={studentDetail.fatherName} onChange={(event) => { handleOnChangeInputField(event, 'fatherName') }} type="text" className="input-box-register" placeholder='Fathers Name' />
                        </div>

                        <div className="register-input-box">
                            <input value={studentDetail.fatherMobile} onChange={(event) => { handleOnChangeInputField(event, 'fatherMobile') }} type="text" className="input-box-register" placeholder='Fathers Mobile No' />
                        </div>

                        <div className="register-input-box">
                            <input value={studentDetail.address} onChange={(event) => { handleOnChangeInputField(event, 'address') }} type="text" className="input-box-register" placeholder='Address' />
                        </div>

                        <div className="register-input-box">
                            <input value={studentDetail.previous_health} onChange={(event) => { handleOnChangeInputField(event, 'previous_health') }} type="text" className="input-box-register" placeholder='Previous health issue' />
                        </div>
                        <div className="register-input-box">
                            <input value={studentDetail.age} onChange={(event) => { handleOnChangeInputField(event, 'age') }} type="text" className="input-box-register" placeholder='Age' />
                        </div>
                        <div className="register-input-box">
                            <input value={studentDetail.bloodGroup} onChange={(event) => { handleOnChangeInputField(event, 'bloodGroup') }} type="text" className="input-box-register" placeholder='Blood Group' />
                        </div>


                    </div>
                   {
                    studentDetail?._id? 
                    <div className="block-divs">
                        <button onClick={handleUpdateFunc} type='submit' className="form-btn reg-btn">Update</button>
                        <button  type='submit' className="form-btn reg-btn" onClick={openCloseModal}>Report</button>
                    </div>
                    :  <button onClick={resgisterStudent}  type='submit' className="form-btn reg-btn">Register</button>
                   }
                </form>
            </div>
            {reportModal && <Modal header="Report" handleClose={openCloseModal} children={<Report studentDetail={studentDetail}  handleCloseModel={openCloseModal} />} />}
            <ToastContainer />
        </div>
    )
}

export default RegisterStudent
