import React, { useState } from "react";
import "./adminDashboard.css";
import Modal from "../../../components/Modal/modal";
import ManageStaff from "./ManageStaff/manageStaff";
import ManageEvent from "./ManageEvent/manageEvent";
import { Link } from "react-router-dom";
const AdminDashboard = (props) => {
  const [manageStaffModal, setmanageStaffModal] = useState(false);
  const [eventModal, setEvenModal] = useState(false);
  const openCloseModal = (value) => {
    if (value === "event") {
      setEvenModal((prev) => !prev); //open hai toh close kardo and vica versa
    } else {
      setmanageStaffModal((prev) => !prev);
    }
  };
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
  const isAdmin = userInfo?.role === "admin";

  return (
    <div className="adminDashboard">
      <div className="welcome-header">
        <div className="welcome-admin"> Welcome to Admin Panel</div>
        <div className="welcome-admin-right-side">
          {isAdmin && (
            <div
              className="manage-staff-btn"
              onClick={() => {
                openCloseModal("staff");
              }}
            >
              Manage Staffs
            </div>
          )}
          <div
            className="manage-staff-btn"
            onClick={() => {
              openCloseModal("event");
            }}
          >
            Events
          </div>
        </div>
      </div>
      <div className="admin-dashboard-cards">
        {/* link used so url change on Clicking on this card */}
        <Link to={"/admin/register-student"} className="admin-dashboard-card">
          Register Student
        </Link>
        <Link to={"/admin/manage-medicine"} className="admin-dashboard-card">
          Mange Medicines
        </Link>
        <Link to={"/admin/record"} className="admin-dashboard-card">
          Records
        </Link>
        <Link to={"/admin/facility"} className="admin-dashboard-card">
          Facilites
        </Link>
        <Link to={"/admin/nearByHospital"} className="admin-dashboard-card">
          Near By Hospitals
        </Link>
        <Link to={"/admin/gallary"} className="admin-dashboard-card">
          Gallary
        </Link>
      </div>
      {manageStaffModal && (
        <Modal
          value={"Staff"}
          handleClose={openCloseModal}
          header={"Manage Staffs"}
          children={
            <ManageStaff
              showLoader={props.showLoader}
              hideLoader={props.hideLoader}
            />
          }
        />
      )}
      {eventModal && (
        <Modal
          value={"event"}
          handleClose={openCloseModal}
          header={"Manage Events"}
          children={
            <ManageEvent
              showLoader={props.showLoader}
              hideLoader={props.hideLoader}
            />
          }
        />
      )}
    </div>
  );
};

export default AdminDashboard;
