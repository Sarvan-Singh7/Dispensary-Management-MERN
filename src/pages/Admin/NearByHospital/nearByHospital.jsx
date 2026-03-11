import React from 'react'
import { useState } from 'react'
import './nearByHospital.css'
import { Link } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Modal from '../../../components/Modal/modal';
import NearByModal from './NearByModal/nearByModal';
const  NearByHospital = () => {
    const [model,setModal]=useState(false);
    
    const onOFModal=()=>{
        setModal(prev=>!prev);
    }
  return (
    <div className='admin-facility'>
      <div className="go-back"><Link to={'/admin/dashboard'}><ArrowBackIcon /> Back to Dashboard</Link></div>

      <div className='admin-facility-header'>
        <div>Near By Hospital</div>
        <div className='add-facility-btn' onClick={onOFModal}>Add</div>
      </div>

      <div className='admin-facility-rows'>
        <div className='admin-facility-row'>

            <div className='admin-facility-left'>
                <div className='admin-facility-title'>Neelam Hospital</div>
                <div>Address :Newar Chitkara University, Punjab</div>
                <div>+9885467684</div>
                <div style={{marginTop:"10px"}}>Added By :Deepanshu</div>
            </div>

            <div className='admin-facility-btns'>
                <div><EditIcon /></div>
                <div><DeleteIcon /></div>
            </div>

        </div>
      </div>
           
      {model &&<Modal headers="Add Facility" handleClose={onOFModal} children={<NearByModal/>}/>}
    </div>
  )
}

export default NearByHospital
