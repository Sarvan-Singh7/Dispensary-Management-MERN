import React from 'react'
import './adminDashboard.css'
const AdminDashboard = () => {
  return (
    <div className='adminDashboard'>
      <div className="welcome-header">
        <div className="welcome-admin"> Welcome to Admin Panel</div>
        <div className="welcome-admin-right-side">
          <div className="manage-staff-btn">Mange Staffs</div>
          <div className="manage-staff-btn">Events</div>
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
    </div>
  )
}

export default AdminDashboard
