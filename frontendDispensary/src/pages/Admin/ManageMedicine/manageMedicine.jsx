import React, { useState,useEffect } from 'react'
import './manageMedicine.css'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import SearchBox from '../../../components/SearchBox/searchBox'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '../../../components/Modal/modal'
import MedicineModal from './MedicineModal/medicineModal'
import { ToastContainer,toast } from 'react-toastify'
import axios from 'axios'
export const ManageMedicine = (props) => {
    const [medicineSearch, setMedicineSearch] = useState(""); ///aisa hai ki har bar user jo type karega usko usestate se hande kiya hai sir so that search box ki value mein medicine search passed
    const [addModal, setAddModal] = useState(false); //on Add button clicked
    const [data,setData] = useState([]); 
    const [clickedMedicine,setClickedMedicine] = useState(null); 


    const onOffmodal = () => {
        if(addModal)setClickedMedicine(null);
        setAddModal(prev => !prev)//true hai toh false kardo and vica versa
    }
    const onChangeValue = (value) => {
        setMedicineSearch(value);
    }
    const fetchData=async()=>{
        props.showLoader();
        await axios.get(`http://localhost:4000/api/medicine/search-by-name?name=${medicineSearch}`).then((resp)=>{
            // console.log(resp);
            setData(resp.data.medicines);
        }).catch((err)=>{
            toast.error(err?.response?.data?.error);
        }).finally(()=>{
             props.hideLoader();
        })
    }
    const handleEdit=(item)=>{
        setClickedMedicine(item);
        setAddModal(true);
    }
    const filterOutMedicine=(id)=>{
        let newArr=data.filter((item)=>item._id!==id);
        setData(newArr);
    }
    const handleDelete=async(id)=>{
        props.showLoader();
        await axios.delete(`http://localhost:4000/api/medicine/delete/${id}`,{withCredentials:true}).then((resp)=>{
            filterOutMedicine(id);
            toast.success("Medicine Deleted Successfully");
        }).catch((err)=>{
            toast.error(err?.response?.data?.error);
        }).finally(()=>{
             props.hideLoader();
        })
    }
    useEffect(()=>{
       
       fetchData();
    }, [medicineSearch])
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
                       {
                            data.map((item,index)=>{
                                return (
                                <div className="report-form-row">
                                <div className=''>{index + 1}</div>
                                <div className='col-2-mng'>{item.name}</div>
                                <div className='col-2-mng'>{item?.addedBy?.name}</div>
                                <div className='col-2-mng'>{item.quantity}</div>
                                <div onClick={()=>handleEdit(item)} className='edit-icon'><EditIcon /></div>
                                <div onClick={()=>handleDelete(item._id)} className='delete-icon'><DeleteIcon /></div>

                            </div>);
                            })
                       }

                        {
                            data.length === 0 && <div className="report-form-row">
                            <div className=''>No Any Medicine yet</div>  
                        </div>  
                        }

                    </div>

                </div>
            </div>
            {/* //below used common modal component and props passed to it and ye open close with help of Add button which further handled by onOffModal function */}
            {addModal && <Modal header="Add Medicine" handleClose={onOffmodal} children={<MedicineModal showLoader={props.showLoader} hideLoader={props.hideLoader} clickedMedicine={clickedMedicine} />} />}
            <ToastContainer/>
        </div>

    )
}

export default ManageMedicine