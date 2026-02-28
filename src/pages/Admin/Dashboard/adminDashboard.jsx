import React,{useState} from 'react'
import './adminDashboard.css'
import Modal from '../../../components/Modal/modal'
import ManageStaff from './ManageStaff/manageStaff'
import ManageEvent from './ManageEvent/manageEvent'
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
        <div className="admin-dashboard-card">
          Register Student
        </div>
         <div className="admin-dashboard-card">
          Mange Medicines
        </div>
         <div className="admin-dashboard-card">
          Records 
        </div>
         <div className="admin-dashboard-card">
          Facilites
        </div>
            <div className="admin-dashboard-card">
          Near By Hospitals
        </div>
         <div className="admin-dashboard-card">
          Galary
        </div>
      </div>
   {manageStaffModal &&  <Modal value={"Staff"} handleClose={openCloseModal} header={"Manage Staffs"} children={<ManageStaff/>} />}
   {eventModal &&  <Modal value={"event"} handleClose={openCloseModal} header={"Manage Events"} children={<ManageEvent/>} />}
    </div>
  )
}

export default AdminDashboard
