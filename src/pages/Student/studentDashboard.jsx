import React, { useState } from 'react'
import './studentDashboard.css'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Modal from '../../components/Modal/modal';
import StudentModal from './StudentModal/studentModal';
const StudentDashboard = () => {
  const [modal, setModal] = useState(false);
  const handleOnOfModal = () => {
    setModal(prev => !prev)
  }
  return (
    <div className='student-dashboard'>
      <div className='student-info'>
        <div className='welcome-user'>Welcome, <span>Preenu Mittan</span></div>
        <div className='welcome-user'>22</div>
        <div className='welcome-user'>preenuMittan@gmail.com</div>
      </div>
      <div className='student-data'>
        <div className='student-data-header'>
          <div className='student-header-title'>View</div>
          <div className='student-header-title'>Date</div>
        </div>

        <div className='student-row-items'>
          <div className='student-row-item'>
            <div onClick={() => handleOnOfModal()}><RemoveRedEyeIcon sx={{ cursor: "pointer" }} /></div>
            <div>06-03-2026</div>
          </div>
          <div className='student-row-item'>
            <div onClick={() => handleOnOfModal()}><RemoveRedEyeIcon sx={{ cursor: "pointer" }} /></div>
            <div>11-11-2026</div>
          </div>
        </div>
      </div>
      {modal && <Modal handleClose={handleOnOfModal} header={"Details"} children={<StudentModal />} />}
    </div>
  )
}

export default StudentDashboard
