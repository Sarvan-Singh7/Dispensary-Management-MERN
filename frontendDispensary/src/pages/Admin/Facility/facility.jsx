import React from "react";
import { useState, useEffect } from "react";
import "./facility.css";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Modal from "../../../components/Modal/modal";
import FacilityModal from "./FacilityModal/facilitymodal";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
const Facility = (props) => {
  const [model, setModal] = useState(false); //SO ON cLICK ON aDD
  const [data, setData] = useState([]);
  const [clickedItem, setClickedItem] = useState(null); 
  const onOFModal = () => {
    if(model){
      setClickedItem(null);
    }
    setModal((prev) => !prev);
  };
  const fetchData = async () => {
    props.showLoader();
    await axios
      .get("http://localhost:4000/api/facility/get")
      .then((resp) => {
        // console.log(resp);
        setData(resp.data.facility);
      })
      .catch((err) => {
        toast.error(err?.response?.data?.error);
      })
      .finally(() => {
        props.hideLoader();
      });
  };
  const handleEdit = (item) => {
    setClickedItem(item);
    setModal(true);
    
  }
  const filterOutData=(id)=>{
    let newArr=data.filter((item)=>item._id!==id);
    setData(newArr);
  }
  const handleDelete=async(id)=>{
    props.showLoader();
    await axios.delete(`http://localhost:4000/api/facility/delete/${id}`,{withCredentials:true}).then((resp)=>{
       filterOutData(id);
    }).catch((err)=>{
      toast.error(err?.response?.data?.error);
    }).finally(()=>{
      props.hideLoader();
    })
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="admin-facility">
      <div className="go-back">
        <Link to={"/admin/dashboard"}>
          <ArrowBackIcon /> Back to Dashboard
        </Link>
      </div>

      <div className="admin-facility-header">
        <div>Facilities</div>
        <div className="add-facility-btn" onClick={onOFModal}>
          Add
        </div>
      </div>

      <div className="admin-facility-rows">
        {data.map((item) => {
          return (
            <div className="admin-facility-row">
              <div className="admin-facility-left">
                <div className="admin-facility-title">{item.title}</div>
                <div>
                  {item.description}
                </div>
                <div style={{ marginTop: "10px" }}>Added By : {item?.addedBy?.name}</div>
              </div>

              <div className="admin-facility-btns">
                <div className="edit-icon" onClick={()=>handleEdit(item)}>
                  <EditIcon />
                </div>
                <div className="delete-icon" onClick={()=>handleDelete(item._id)}>
                  <DeleteIcon />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {model && (
        <Modal
          headers="Add Facility"
          handleClose={onOFModal}
          children={<FacilityModal clickedItem={clickedItem} />}
        />
      )}
      <ToastContainer />
    </div>
  );
};

export default Facility;
