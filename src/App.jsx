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
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className = 'App'>
      <Header/>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/login' element = {<Login/>}/>
         <Route path = '/stock' element = {<Stock/>}/>
          <Route path = '/admin/dashboard' element = {<AdminDashboard/>}/>
            <Route path = '/admin/register-student' element = {<RegisterStudent/>}/>
            <Route path = '/admin/manage-medicine' element = {<ManageMedicine/>}/>
            <Route path = '/admin/record' element = {<Record/>}/>
            <Route path = '/admin/facility' element = {<Facility/>}/>

      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
