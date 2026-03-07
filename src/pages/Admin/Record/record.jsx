import React, { useEffect, useState } from 'react'
import './record.css'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchBox from '../../../components/SearchBox/searchBox'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Modal from '../../../components/Modal/modal';
import RecordModal from './RecordModal/recordModal';


export const Record = () => {

  const [studentRoll, setStudentRoll] = useState("");
  const [listOfYear, setListOYear] = useState([]);
  const [listOfMonths, setListOfMonths] = useState([]);
  const currentYear = new Date().getFullYear();

  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [modal,setModal]=useState(false)

  const onOffModal=()=>{
    setModal(prev=>!prev);
  }

  const onChangeField = (value) => {
    setStudentRoll(value)
  }

  const fetchData = async () => {

  }

  useEffect(() => {
    if (selectedMonth === "" || selectedYear === "") {
      return;
    }
    fetchData();

  }, [selectedYear, selectedMonth])

  useEffect(() => {
    let arr = [];
    for (let i = 2026; i <= parseInt(currentYear); i++) {
      arr.unshift(i.toString());
    }
    setListOYear(arr);
    setSelectedYear(arr[0]);

    const months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const currentMonthIndex = new Date().getMonth();

    const pastAndCurrentMonths = months.slice(0, currentMonthIndex + 1);
    setListOfMonths(pastAndCurrentMonths);
    setSelectedMonth(pastAndCurrentMonths[pastAndCurrentMonths.length - 1]);

  }, [])

  const handleOnOpenModal=()=>{
    setModal(prev=>!prev);
  }

  return (
    <div className='records'>
      <div className="go-back"><Link to={'/admin/dashboard'}><ArrowBackIcon /> Back to Dashboard</Link></div>

      <SearchBox value={studentRoll} onChange={onChangeField} placeholder="Search By Roll No." />

      <div className='record-div-block'>Select Year
        <div className='record-date-year'>
          {
            listOfYear.map((item, index) => {
              return (
                <div onClick={() => setSelectedYear(item)} className={`record-year ${selectedYear === item ? 'active-status' : null}`}>{item}</div>
              );
            })
          }
        </div>


        Select Month
        <div className='record-date-year'>
          {
            listOfMonths.map((item, index) => {
              return (
                <div onClick={() => setSelectedMonth(item)} className={`record-year ${selectedMonth === item ? 'active-status' : null}`}>{item}</div>
              );
            })
          }

        </div>
      </div>

      <div className='manageMedicine-card'>

        <div className="report-form-rows">
          <div className="report-form-header">
            <div className=''>View</div>
            <div className='col-2-mng'>Student Name</div>
            <div className='col-2-mng'>Roll No.</div>
            <div className='col-3-mng'>Date</div>
            </div>


          <div className="report-form-row-block">
            <div className="report-form-row">
              <div className='' onClick={()=>{handleOnOpenModal()}}><RemoveRedEyeIcon sx={{cursor:"pointer"}}/></div>
              <div className='col-2-mng'>Danish</div>
              <div className='col-2-mng'>2410991854</div>

              <div className='col-3-mng'>12-12-2026</div>
              </div>

            <div className="report-form-row">
              <div className=''>No Any Records Yet</div>

            </div>
          </div>

        </div>

      </div>
      {modal && <Modal header="Records" handleClose={onOffModal} children={<RecordModal/>}/>
    }
          </div>
  )
}
export default Record;