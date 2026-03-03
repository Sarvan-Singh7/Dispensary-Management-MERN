import React, { useState } from 'react'
import './manageMedicine.css'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import SearchBox from '../../../components/SearchBox/searchBox'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '../../../components/Modal/modal'
import MedicineModal from './MedicineModal/medicineModal'

export const ManageMedicine = () => {
    const [medicineSearch, setMedicineSearch] = useState("");
    const [addModal,setAddModal]=useState(false);

    const onOffmodal=()=>{
        setAddModal(prev=>!prev)
    }
    const onChangeValue = (value) => {
        setMedicineSearch(value);
    }
    return (
        
        <div className='manageMedicine'><div className="go-back"><Link to={'/admin/dashboard'}><ArrowBackIcon /> Back to Dashboard</Link></div>

        <div className='top-manage-medicine'>
                <SearchBox plaeholder="Search Medicine" value={medicineSearch} onChange={onChangeValue} />
                <div className='add-manage-medicine' onClick={onOffmodal}>Add</div>

                <div className='manageMedicine-card'>

                    <div className="report-form-rows">
                        <div className="report-form-header">
                            <div className=''>Sr. No.</div>
                            <div className='col-2-mng'>Medicine Name</div>
                            <div className='col-2-mng'>Added By</div>
                            <div className='col-3-mng'>Quantity</div>
                            <div className=''>Edit</div>
                            <div className=''>Delete</div>
                        </div>


                        <div className="report-form-row-block">
                            <div className="report-form-row">
                                <div className=''>2</div>
                                <div className='col-2-mng'>Paracetamol</div>
                                <div className='col-2-mng'>Danish</div>

                                <div className='col-3-mng'>12</div>
                                <div className='edit-icon'><EditIcon/></div>
                                <div className='delete-icon'><DeleteIcon/></div>
                            </div>

                            <div className="report-form-row">
                                <div className=''>No Any Medicine Yet</div>
                                
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            {
            addModal && <Modal header="Add Medicine" handleClose={onOffmodal} childeren={<MedicineModal/>} />
            }
        </div>

    )
}

export default ManageMedicine