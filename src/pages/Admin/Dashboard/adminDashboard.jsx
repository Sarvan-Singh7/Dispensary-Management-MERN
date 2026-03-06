import React,{useState} from 'react'
import './adminDashboard.css'
import Modal from '../../../components/Modal/modal'
import ManageStaff from './ManageStaff/manageStaff'
import ManageEvent from './ManageEvent/manageEvent'
import { Link } from 'react-router-dom'
const AdminDashboard = () => {
  const [manageStaffModal,setmanageStaffModal]=useState(false)
  const [eventModal,setEvenModal]=useState(false)
  const openCloseModal=(value)=>{
if(value==='event'){
setEvenModal(prev=>!prev)
}
else{
  setmanageStaffModal(prev=>!prev)
}
  }
  return (
    <div className='adminDashboard'>
      <div className="welcome-header">
        <div className="welcome-admin"> Welcome to Admin Panel</div>
        <div className="welcome-admin-right-side">
          <div className="manage-staff-btn" onClick={()=>{openCloseModal("staff")}}>Mange Staffs</div>
          <div className="manage-staff-btn" onClick={()=>{openCloseModal("event")}}>Events</div>
        </div>
      </div>
      <div className="admin-dashboard-cards">
        <Link to={'/admin/register-student'} className="admin-dashboard-card">
          Register Student
        </Link>
         <Link to={'/admin/manage-medicine'}className="admin-dashboard-card">
          Mange Medicines
        </Link>
         <Link to={'/admin/record'}className="admin-dashboard-card">
          Records 
        </Link>
         <Link to={'/admin/facility'} className="admin-dashboard-card">
          Facilites
        </Link>
            <Link to={'/admin/nearByHospital'} className="admin-dashboard-card">
          Near By Hospitals
        </Link>
         <Link to={'/admin/gallary'} className="admin-dashboard-card">
          Gallary
        </Link>
      </div>
   {manageStaffModal &&  <Modal value={"Staff"} handleClose={openCloseModal} header={"Manage Staffs"} children={<ManageStaff/>} />}
   {eventModal &&  <Modal value={"event"} handleClose={openCloseModal} header={"Manage Events"} children={<ManageEvent/>} />}
    </div>
  )
}

export default AdminDashboard
