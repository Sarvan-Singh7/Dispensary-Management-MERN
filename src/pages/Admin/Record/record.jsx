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
  const [listOfYear, setListOYear] = useState([]);//to get list of current and previous year in decreasing order
  const [listOfMonths, setListOfMonths] = useState([]); //to get list of current month and all other passed in decreasing order so logic used
  const currentYear = new Date().getFullYear();   ///to get current ongoing year

  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [modal, setModal] = useState(false)   

  const onOffModal = () => {
    setModal(prev => !prev); ///for page ko open close karne ke liye
  }

  const onChangeField = (value) => {
    setStudentRoll(value)///searchBox component mein iski help se current value of serachbox entered pass ki jaegi as useState used
  }

  const fetchData = async () => {

  }

  useEffect(() => {   ///for future when Backend Integrated
    if (selectedMonth === "" || selectedYear === "") {
      return;
    }
    fetchData();

  }, [selectedYear, selectedMonth])

  useEffect(() => {
    ///below is year logic
    let arr = [];
    for (let i = 2026; i <= parseInt(currentYear); i++) {
      arr.unshift(i.toString());   //array ke strarting mein push kiya
    }
    setListOYear(arr);
    setSelectedYear(arr[0]);
   ///below is month logic
    const months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const currentMonthIndex = new Date().getMonth();///gives 0 fro  January and 11 for December

    const pastAndCurrentMonths = months.slice(0, currentMonthIndex + 1);//months array se current month tak liya
    setListOfMonths(pastAndCurrentMonths);
    setSelectedMonth(pastAndCurrentMonths[pastAndCurrentMonths.length - 1]);

  }, [])

  const handleOnOpenModal = () => {
    setModal(prev => !prev);
  }

  return (
    <div className='records'>
      <div className="go-back"><Link to={'/admin/dashboard'}><ArrowBackIcon /> Back to Dashboard</Link></div>

      <SearchBox value={studentRoll} onChange={onChangeField} placeholder="Search By Roll No." />

      <div className='record-date-block'>Select Year
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
              {/* ////////////below sx used to give styling to material ui icons */}
              <div className='' onClick={() => { handleOnOpenModal() }}><RemoveRedEyeIcon sx={{ cursor: "pointer" }} /></div>
              <div className='col-2-mng'>Danish</div>
              <div className='col-2-mng'>2410991854</div>

              <div className='col-3-mng'>12-12-2025</div>
            </div>
            
            <div className="report-form-row">
              <div className='' onClick={() => { handleOnOpenModal() }}><RemoveRedEyeIcon sx={{ cursor: "pointer" }} /></div>
              <div className='col-2-mng'>Simar </div>
              <div className='col-2-mng'>2410991729</div>

              <div className='col-3-mng'>11-3-2026</div>
            </div>

            {/* <div className="report-form-row">
              <div className=''>No Any Records Yet</div>

            </div> */}
          </div>

        </div>

      </div>
      {/* modal ke onOffModal bhi passed to check open or not on EYE CLICK*/}
      {modal && <Modal header="Records" handleClose={onOffModal} children={<RecordModal />} />
      }
    </div>
  )
}
export default Record;