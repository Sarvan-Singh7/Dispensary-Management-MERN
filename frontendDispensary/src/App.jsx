import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home'
import './App.css'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Login from './pages/login/login'
import Stock from './pages/stock/stock'
import AdminDashboard from './pages/Admin/Dashboard/adminDashboard'
import RegisterStudent from './pages/Admin/RegisterStudent/registerStudent'
import ManageMedicine from './pages/Admin/ManageMedicine/manageMedicine'
import Record from './pages/Admin/Record/record'
import Facility from './pages/Admin/Facility/facility'
import NearByHospital from './pages/Admin/NearByHospital/nearByHospital'
import AdminGallary from './pages/Admin/Gallary/adminGallary'
import StudentDashboard from './pages/Student/studentDashboard'
import GlobalLoader from './components/GlobalLoader/globalLoader'
function App() {
  const [count, setCount] = useState(0)
  const [loader,setLoader]=useState(false);
  const [isLogin,setIsLogin]=useState(localStorage.getItem('isLogin'));
  const handleLogin=(value)=>{
    setIsLogin(value);
  }
  const showLoader=()=>{
    setLoader(true);
  }
  const hideLoader=()=>{
    setLoader(false);
  }
  return (
    <div className='App'>
      <Header isLogin={isLogin}handleLogin={handleLogin} showLoader={showLoader} hideLoader={hideLoader} />
      <Routes>
        <Route path='/' element={<Home showLoader={showLoader} hideLoader={hideLoader}  />} />
        <Route path='/login' element={<Login handleLogin={handleLogin} showLoader={showLoader} hideLoader={hideLoader} />} />
        <Route path='/stock' element={<Stock showLoader={showLoader} hideLoader={hideLoader} />} />
        <Route path='/admin/dashboard' element={<AdminDashboard showLoader={showLoader} hideLoader={hideLoader}/>} />
        <Route path='/admin/register-student' element={<RegisterStudent showLoader={showLoader} hideLoader={hideLoader} />} />
        <Route path='/admin/manage-medicine' element={<ManageMedicine showLoader={showLoader} hideLoader={hideLoader} />} />
        <Route path='/admin/record' element={<Record showLoader={showLoader} hideLoader={hideLoader} />} />
        <Route path='/admin/facility' element={<Facility showLoader={showLoader} hideLoader={hideLoader} />} />
        <Route path='/admin/nearByHospital' element={<NearByHospital showLoader={showLoader} hideLoader={hideLoader} />} />
        <Route path='/admin/gallary' element={<AdminGallary showLoader={showLoader} hideLoader={hideLoader} />} />

        <Route path='/student/:id' element={<StudentDashboard showLoader={showLoader} hideLoader={hideLoader}/>}></Route>
      </Routes>
      <Footer />


      {
        loader && <GlobalLoader />
      }
    </div>
  )
}

export default App;
