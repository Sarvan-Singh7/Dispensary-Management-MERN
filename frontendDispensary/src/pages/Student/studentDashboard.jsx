import React, { useState ,useEffect} from 'react'
import './studentDashboard.css'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Modal from '../../components/Modal/modal';
import StudentModal from './StudentModal/studentModal';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
const StudentDashboard = (props) => {
  let userInfo=localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null;
  const [history, setHistory] = useState([]); ///to store the history of student whose eye icon is clicked to show in modal

  const [selectedHistory, setSelectedHistory] = useState(null);

  const fetchData = async() => {
    props.showLoader();
    await axios.get(`http://localhost:4000/api/history/get?roll=${userInfo?.roll}`, { withCredentials: true }).then((response) => {
      setHistory(response.data.history);
    }).catch((error) => {
      toast.error(error?.response?.data?.error || "Error fetching history");
    }).finally(() => {  
      props.hideLoader();
    })
  }
  
  useEffect(() => {
      if (userInfo?.roll) {
          fetchData();
      }
  }, [])

  const [modal, setModal] = useState(false);
  const handleOnOfModal = (item) => {
    setSelectedHistory(item ? item : null);
    setModal(prev => !prev)
  }
  
  return (
    <div className='student-dashboard'>
      <div className='student-info'>
            {/* //we use ? so that whenwe are rendering this page for first time and data is not there in local storage then also it will not give error as we are using ? to check that data is there or not before rendering */}
        <div className='welcome-user'>Welcome, <span>{userInfo?.name}</span></div>  
        <div className='welcome-user'>{userInfo?.roll}</div>
        <div className='welcome-user'>{userInfo?.email}</div>
      </div>
      <div className='student-data'>
        <div className='student-data-header'>
          <div className='student-header-title'>View</div>
          <div className='student-header-title'>Date</div>
        </div>

        <div className='student-row-items'>
          {history && history.length > 0 ? (
            history.map((item, index) => (
              <div key={index} className='student-row-item'>
                <div onClick={() => handleOnOfModal(item)}><RemoveRedEyeIcon sx={{ cursor: "pointer" }} /></div>
                <div>{item?.createdAt?.slice(0, 10).split("-").reverse().join("-")}</div>
              </div>
            ))
          ) : (
            <div className='student-row-item'>
              <div>No records found</div>
            </div>
          )}
        </div>
      </div>
      {modal && <Modal handleClose={() => handleOnOfModal(null)} header={"Details"} children={<StudentModal selectedHistory={selectedHistory} />} />}
      <ToastContainer />
    </div>
  )
}

export default StudentDashboard
