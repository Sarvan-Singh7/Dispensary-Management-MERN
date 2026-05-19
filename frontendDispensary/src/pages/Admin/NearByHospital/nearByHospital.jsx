import React from 'react'
import { useState ,useEffect } from 'react'
import './nearByHospital.css'
import { Link } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Modal from '../../../components/Modal/modal';
import NearByModal from './NearByModal/nearByModal';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
const NearByHospital = (props) => {
  const [model, setModal] = useState(false);
  const [data,setData] = useState([]);
  const [clickedItem,setClickedItem] = useState(null);
  const onOFModal = () => {
    if(model){
      setClickedItem(null);
    }
    setModal(prev => !prev);
  }
  const fetchData=async()=>{
    props.showLoader();
    await axios.get(`http://localhost:4000/api/hospital/get`).then((resp)=>{
      setData(resp.data.hospitals);
      console.log(resp);
    }).catch((err)=>{
      toast.error(err?.response?.data?.error);
    }).finally(()=>{
      props.hideLoader();
    })
  }
  useEffect(() => {
    fetchData();
  },[])
  const handleEdit=(item)=>{
    setClickedItem(item);
    setModal(true);
  }
  const filterOutData=(id)=>{
    let newArr=data.filter((item)=>item._id!==id);
    setData(newArr);
  }
  const handleDelete=async(id)=>{
    props.showLoader();
    await axios.delete(`http://localhost:4000/api/hospital/delete/${id}`,{withCredentials:true}).then((resp)=>{
      filterOutData(id);
    }).catch((err)=>{
      toast.error(err?.response?.data?.error);
    }).finally(()=>{
      props.hideLoader();
    })
  }
  return (
    <div className='admin-facility'>
      <div className="go-back"><Link to={'/admin/dashboard'}><ArrowBackIcon /> Back to Dashboard</Link></div>

      <div className='admin-facility-header'>
        <div>Near By Hospital</div>
        <div className='add-facility-btn' onClick={onOFModal}>Add</div>
      </div>

      <div className='admin-facility-rows'>
        {
          data.map((item,index) => {
            return (
              <div className='admin-facility-row' key={item._id}>

          <div className='admin-facility-left'>
            <div className='admin-facility-title'>Name : {item.name}</div>
            <div>Adress : {item.address}</div>
            <div>Contact Number : {item.contact}</div>
            <div style={{ marginTop: "10px" }}>Added By : {item?.addedBy?.name}</div>
          </div>

          <div className='admin-facility-btns'>
            <div onClick={()=>(handleEdit(item))} className='edit-icon'><EditIcon /></div>
            <div onClick={()=>(handleDelete(item._id))} className='delete-icon'><DeleteIcon /></div>
          </div>

        </div>
            );  
        })
        }
      </div>

      {model && <Modal headers="Add Facility" handleClose={onOFModal} children={<NearByModal  clickedItem={clickedItem}/>} />}
      <ToastContainer />
    </div>
  )
}

export default NearByHospital
