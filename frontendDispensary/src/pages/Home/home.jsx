import React, {useState} from 'react'
import './home.css'

import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ImageIcon from '@mui/icons-material/Image';

import AboutUs from '../../components/AboutUs/aboutUs'
import Staff from '../../components/Staffs/staff'
import Facility from '../../components/Facilities/facility'
import NearByHospitals from '../../components/NearByHospitals/nearByHospital'
import Gallery from '../../components/Gallery/gallery'
import { Link } from 'react-router-dom';

const Home = (props) => {
     
     const [page, setPage] = useState('aboutUs');//aboutUs, staff, facilities, nearbyHospitals, gallery ka selection
     const [rightSideHeader, setRightSideHeader] = useState('About Us');//aboutus etc ka heading that is in blue color
    let userInfo=localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null;
    const handleChangeTab = (pagename) => {//so that when we click on about us, staff, facilities, nearbyHospitals, gallery then the right side header and page will change accordingly
        setPage(pagename);
        switch (pagename) {
            case "About":
                setRightSideHeader("About Us");
                break;
            case "Staff":
                setRightSideHeader("Our Staffs");
                break;
            case "Facilities":
                setRightSideHeader("Facilities");
                break;
            case "NearByHospitals":
                setRightSideHeader("Near By Hosptals");
                break;
            case "Gallery":
                setRightSideHeader("Gallery");
                break;

            default :
                setRightSideHeader("About Us");
        }
    }
    const getComponent = () => {
      switch(page){
        case "About":
          return <AboutUs/>
        
        case "Staff":
          return <Staff showLoader={props.showLoader} hideLoader={props.hideLoader} />

        case "Facilities":
          return <Facility showLoader={props.showLoader} hideLoader={props.hideLoader}/>

        case "NearByHospitals":
          return <NearByHospitals showLoader={props.showLoader} hideLoader={props.hideLoader}/>
        case "Gallery":
          return <Gallery showLoader={props.showLoader} hideLoader={props.hideLoader}/>

          default:
            return <AboutUs/>;
      }
    }


  return (
    <div className = 'home'>
       <div className = 'home-block'>
         {/* Left part of the page with different options mentioned */}
          <div className = 'home-left-page'>
            {
              userInfo && userInfo?.role !=="student" && <Link to={'/admin/dashboard'} className = {`home-left-option`} >
                    <HomeIcon/> DashBoard
               </Link>
            }
            
               <div className = {`home-left-option ${page === 'About' ? 'active-opt' : null}`} onClick = {() => handleChangeTab('About')}>
                    <HomeIcon/> About Us
               </div>
               <div className = {`home-left-option ${page === 'Staff' ? 'active-opt' : null}`} onClick = {() => handleChangeTab('Staff')}>
                    <PeopleAltIcon/> Staff
               </div>
               <div className = {`home-left-option ${page === 'Facilities' ? 'active-opt' : null}`} onClick = {() => handleChangeTab('Facilities')}>
                    <Diversity1Icon/> Facilities
               </div>
               <div className = {`home-left-option ${page === 'NearByHospitals' ? 'active-opt' : null}`} onClick = {() => handleChangeTab('NearByHospitals')}>
                    <LocalHospitalIcon/> Near By Hospitals
               </div>
               <div className = {`home-left-option ${page === 'Gallery' ? 'active-opt' : null}`} onClick = {() => handleChangeTab('Gallery')}>
                    <ImageIcon/> Gallery
               </div>
          </div>
          {/* Right part of the page with different componenets to render on corrosponding to left one */}

          <div className = 'home-right-page'>
                <div className = 'home-right-header'>
                  {rightSideHeader}
                </div>
                <div className = 'home-right-section'>
                  {getComponent()}
                  {/* ye upar wala function hai jo ki page ke hisab se component return karega, jaise ki agar page about hai to about component return karega, agar staff hai to staff component return karega etc */}
                </div>
          </div>

       </div>
    </div>
  )
}

export default Home;