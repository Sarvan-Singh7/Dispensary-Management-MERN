import React,{useState} from 'react'
import './registerStudent.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import SearchBox from '../../../components/SearchBox/searchBox';
import Modal from '../../../components/Modal/modal';
import Report from './Report/report';
const RegisterStudent = () => {

    const [searchStudent,setSearchStudent]= useState("");
    const [reportModal,setReportModal]= useState("");

    const [studentDetail,setStudentDetail]=useState({_id:"",email:"",name:"",roll:"",mobileNo:"",fatherName:"",fatherMobile:"",address:"",previous_health:"",age:"",bloodGroup:""})
    const handleOnChangeInputField=(event,key)=>{
        setStudentDetail({...studentDetail,[key]:event.target.value})
    }
    const openCloseModal= ()=>{
        setReportModal(prev=>!prev)
    }
    const handleOnChange= (value)=>{
        setSearchStudent(value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
    
  return (
    <div className="register-student">
        <div className="go-back"><Link to={'/admin/dashboard'}><ArrowBackIcon/> Back to Dashboard</Link></div>

        <SearchBox placeholder={"Search By Roll No"} value={searchStudent} onChange={handleOnChange} />

        <div className="register-form-block">
            <div className="register-form-header">Register Student</div>
            <form className="register-form" onSubmit={handleSubmit}>
                <div className="register-form-div">
                    <div className="register-input-box">
                        <input value={studentDetail.name} onChange={(event)=>{handleOnChangeInputField(event,'name')}} type="text" className="input-box-register" placeholder='Student Name' />
                        
                    </div>
                     <div className="register-input-box">
                        <input value={studentDetail.email} onChange={(event)=>{handleOnChangeInputField(event,'email')}} type="email" className="input-box-register" placeholder='Email' />
                        
                    </div>
                     <div className="register-input-box">
                            <input value={studentDetail.roll} onChange={(event)=>{handleOnChangeInputField(event,'roll')}} type="text" className="input-box-register" placeholder='Roll No' />
                        
                    </div>
                     <div className="register-input-box">
                       <input value={studentDetail.mobileNo} onChange={(event)=>{handleOnChangeInputField(event,'mobileNo')}} type="text" className="input-box-register" placeholder='Mobile No' />
                    </div>
                  
                        <div className="register-input-box">
                       <input value={studentDetail.fatherName} onChange={(event)=>{handleOnChangeInputField(event,'fatherName')}} type="text" className="input-box-register" placeholder='Fathers Name' />
                    </div>

                      <div className="register-input-box">
                       <input value={studentDetail.fatherMobile} onChange={(event)=>{handleOnChangeInputField(event,'fatherMobile')}} type="text" className="input-box-register" placeholder='Fathers Mobile No' />
                    </div>

                      <div className="register-input-box">
                       <input value={studentDetail.address} onChange={(event)=>{handleOnChangeInputField(event,'address')}} type="text" className="input-box-register" placeholder='Address' />
                    </div>

                      <div className="register-input-box">
                       <input value={studentDetail.previous_health} onChange={(event)=>{handleOnChangeInputField(event,'previous_health')}} type="text" className="input-box-register" placeholder='Previous health issue' />
                    </div>        
                       <div className="register-input-box">
                       <input value={studentDetail.age} onChange={(event)=>{handleOnChangeInputField(event,'age')}} type="text" className="input-box-register" placeholder='Age' />
                    </div>  
                     <div className="register-input-box">
                       <input value={studentDetail.bloodGroup} onChange={(event)=>{handleOnChangeInputField(event,'bloodGroup')}} type="text" className="input-box-register" placeholder='Blood Group' />
                    </div>   
                    
                            
                </div>
                <button type='submit' className="form-btn reg-btn">Register</button>

                <div className="block-divs">
                    <button type='submit' className="form-btn reg-btn">Update</button>
                    <button type='submit' className="form-btn reg-btn" onClick={openCloseModal}>Report</button>
                </div>
            </form>
        </div>
        {reportModal && <Modal header="Report" handleClose={openCloseModal} children={<Report/>} />}
    </div>
  )
}
 
export default RegisterStudent
