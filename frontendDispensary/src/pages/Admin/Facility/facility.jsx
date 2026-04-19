import React from 'react'
import { useState } from 'react'
import './facility.css'
import { Link } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Modal from '../../../components/Modal/modal';
import FacilityModal from './FacilityModal/facilitymodal';
const Facility = () => {
  const [model, setModal] = useState(false);   //SO ON cLICK ON aDD
  const onOFModal = () => {
    setModal(prev => !prev);
  }
  return (
    <div className='admin-facility'>
      <div className="go-back"><Link to={'/admin/dashboard'}><ArrowBackIcon /> Back to Dashboard</Link></div>

      <div className='admin-facility-header'>
        <div>Facilities</div>
        <div className='add-facility-btn' onClick={onOFModal}>Add</div>
      </div>

      <div className='admin-facility-rows'>
        <div className='admin-facility-row'>

          <div className='admin-facility-left'>
            <div className='admin-facility-title'>Ambulance</div>
            <div>A fully equipped ambulance service is available 24×7 for students, faculty, and staff. The ambulance is stocked with an oxygen cylinder, first aid kit bag, emergency medicines, and all other necessary equipment for prompt medical response.</div>
            <div style={{ marginTop: "10px" }}>Added By :Deepanshu</div>
          </div>

          <div className='admin-facility-btns'>
            <div><EditIcon /></div>
            <div><DeleteIcon /></div>
          </div>

        </div>
      </div>
      <div className='admin-facility-rows'>
        <div className='admin-facility-row'>

          <div className='admin-facility-left'>
            <div className='admin-facility-title'>OPD (Out-Patient Department):</div>
            <div>The Health Centre provides reliable OPD treatment services throughout the academic year. Patients are attended to by qualified medical officers and nursing staff during designated consultation hours.</div>
            <div style={{ marginTop: "10px" }}>Added By :Deepanshu</div>
          </div>

          <div className='admin-facility-btns'>
            <div><EditIcon /></div>
            <div><DeleteIcon /></div>
          </div>

        </div>
      </div>

      
      {model && <Modal headers="Add Facility" handleClose={onOFModal} children={<FacilityModal />} />}
    </div>
  )
}

export default Facility
