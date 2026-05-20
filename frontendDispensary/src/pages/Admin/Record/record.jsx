import React, { useEffect, useState } from 'react'
import './record.css'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchBox from '../../../components/SearchBox/searchBox'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Modal from '../../../components/Modal/modal';
import RecordModal from './RecordModal/recordModal';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import StudentAllFiles from './StudentAllDetails/studentAllFiles';

export const Record = (props) => {

  const [studentRoll, setStudentRoll] = useState("");
  const [listOfYear, setListOYear] = useState([]);//to get list of current and previous year in decreasing order
  const [listOfMonths, setListOfMonths] = useState([]); //to get list of current month and all other passed in decreasing order so logic used
  const currentYear = new Date().getFullYear();   ///to get current ongoing year
  const [data, setData] = useState([]); ///to store history data of students in selected month and year
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [modal, setModal] = useState(false)
  const [allRecordModal, setAllRecordModal] = useState(false); ///to open close modal of all records of student searched by roll no.
  const [selectedHistory, setSelectedHistory] = useState(null); ///to store the history of student whose eye icon is clicked to show in modal
  const [selectedAllDetails, setSelectedAllDetails] = useState(null); ///to store the history of student whose eye icon is clicked to show in modal

  const onOffModal = () => {
    setModal(prev => !prev); ///for page ko open close karne ke liye
  }

  const onOffAllRecordModal = () => {
    if (allRecordModal) {
      setSelectedAllDetails(null);
    }
    setAllRecordModal(prev => !prev); ///for page ko open close karne ke liye
  }

  const onChangeField = (value) => {
    setStudentRoll(value)///searchBox component mein iski help se current value of serachbox entered pass ki jaegi as useState used
  }

  const fetchData = async () => {
    props.showLoader();
    await axios.get(`http://localhost:4000/api/history/get-history?month=${selectedMonth}&year=${selectedYear}`, { withCredentials: true }).then((response) => {
      console.log("history data", response.data);

      // Filter out duplicate records for the same student on the exact same day
      const uniqueData = response.data.history.filter((item, index, self) =>
        index === self.findIndex((t) => (
          t.student?.roll === item.student?.roll &&
          t.createdAt.slice(0, 10) === item.createdAt.slice(0, 10)
        ))
      );

      setData(uniqueData);
    }).catch((err) => {
      console.log(err);
      toast.error(err?.response?.data?.error);
    }).finally(() => {
      props.hideLoader();
    });
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

  const handleOnOpenModal = (item) => {
    setModal(prev => !prev);
    setSelectedHistory(item ? item : null);
  }
  const handleClick = async () => {
    props.showLoader();
    if (studentRoll.trim().length == 0) {
      props.hideLoader();
      return toast.error("Please enter roll number to search");
    }
    await axios.get(`http://localhost:4000/api/history/get?roll=${studentRoll}`, { withCredentials: true }).then((response) => {
      console.log("history data", response.data);
      setAllRecordModal(true);
      setSelectedAllDetails(response.data.history);

      

    }).catch((err) => {
      console.log(err);
      toast.error(err?.response?.data?.error);
    }).finally(() => {
      props.hideLoader();
    })
  }

  return (
    <div className='records'>
      <div className="go-back"><Link to={'/admin/dashboard'}><ArrowBackIcon /> Back to Dashboard</Link></div>

      <SearchBox handleClick={handleClick} value={studentRoll} onChange={onChangeField} placeholder="Search By Roll No." />

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
            {
              data.map((item, index) => {
                return (
                  <div className="report-form-row">
                    {/* ////////////below sx used to give styling to material ui icons */}
                    <div className='' onClick={() => { handleOnOpenModal(item) }}><RemoveRedEyeIcon sx={{ cursor: "pointer" }} /></div>
                    <div className='col-2-mng'>{item?.student?.name || 'N/A'}</div>
                    <div className='col-2-mng'>{item?.student?.roll || 'N/A'}</div>

                    <div className='col-3-mng'>{item.createdAt.slice(0, 10).split("-").reverse().join("-") || 'N/A'}</div>
                  </div>
                )
              })
            }



            {
              data.length == 0 && <div className="report-form-row">
                <div className=''>No Any Records Yet</div>

              </div>
            }
          </div>

        </div>

      </div>
      <ToastContainer />
      {/* modal ke onOffModal bhi passed to check open or not on EYE CLICK*/}
      {modal && (
        <Modal header="Records" handleClose={onOffModal} children={<RecordModal selectedHistory={selectedHistory} />} />
      )}
      {allRecordModal && (
        <Modal header="All Records" handleClose={onOffAllRecordModal} children={<StudentAllFiles studentAllDetails={selectedAllDetails} />} />
      )}
    </div>
  )
}
export default Record;