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
    const [medicineSearch, setMedicineSearch] = useState(""); ///aisa hai ki har bar user jo type karega usko usestate se hande kiya hai sir so that search box ki value mein medicine search passed
    const [addModal, setAddModal] = useState(false); //on Add button clicked

    const onOffmodal = () => {
        setAddModal(prev => !prev)//true hai toh false kardo and vica versa
    }
    const onChangeValue = (value) => {
        setMedicineSearch(value);
    }
    return (

        <div className='manageMedicine'>

            <div className="go-back"><Link to={'/admin/dashboard'}><ArrowBackIcon /> Back to Dashboard</Link></div>

            <div className='top-manage-medicine'>
                <SearchBox placeholder="Search Medicine" value={medicineSearch} onChange={onChangeValue} />

                <div className='add-manage-medicine' onClick={onOffmodal}>
                    Add
                </div>
            </div>

            <div className='manageMedicine-card'>

                <div className="report-form-rows">
                    <div className="report-form-header">
                        <div className=''>Sr. No.</div>
                        <div className='col-2-mng'>Medicine Name</div>
                        <div className='col-2-mng'>Added By</div>
                        <div className='col-2-mng'>Quantity</div>
                        <div className=''>Edit</div>
                        <div className=''>Delete</div>
                    </div>


                    <div className="report-form-row-block">
                        <div className="report-form-row">
                            <div className=''>2</div>
                            <div className='col-2-mng'>Paracetamol</div>
                            <div className='col-2-mng'>Danish</div>
                            <div className='col-2-mng'>12</div>
                            <div className=''><EditIcon /></div>
                            <div className=''><DeleteIcon /></div>

                        </div>

                        {/* <div className="report-form-row">
                            <div className=''>No Any Medicine yet</div>  
                    </div> */}

                    </div>

                </div>
            </div>
            {/* //below used common modal component and props passed to it and ye open close with help of Add button which further handled by onOffModal function */}
            {addModal && <Modal header="Add Medicine" handleClose={onOffmodal} children={<MedicineModal />} />}
        </div>

    )
}

export default ManageMedicine