import React from 'react'
import './header.css'
import { useState, useEffect } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Link, useLocation } from 'react-router-dom';//link tag used to navigate betweeen different pages and also change URL
const Header = () => {
const location= useLocation() //hook to get current location
  const [eventpopup, setEventpopup] = useState(false);
  const [helpline, setHelpline] = useState(false);

  const handleOpenPopup = (popup) => {
    if (popup === "event") {
      setEventpopup(true);
    } else {
      setHelpline(true)
    }
  }

  const handleClosePopup = (popup) => {
    if (popup === "event") {
      setEventpopup(false);
    } else {
      setHelpline(false)
    }
  }
  return (
    <div className='header'>
      <div className='header-college-details'>
        <div className='header-college-details-left'>
          <img className='header-college-details-left-logo' src='https://static.vecteezy.com/system/resources/previews/018/902/537/original/university-college-school-badge-logo-design-image-education-badge-logo-design-university-high-school-emblem-free-vector.jpg' alt='colegeLogo' />
          <div>
            <div className='header-college-details-name'>राष्ट्रीय प्रौद्योगिकी संस्थान,</div>
            <div className='header-college-details-place'>कॉलेज </div>
            <div className='header-college-details-name'>XYZ Institute of Technology, </div>
            <div className='header-college-details-place'>Delhi </div>
          </div>
        </div>
        <div className='header-college-details-right'>
          <div className='header-college-social-media'>
            <a target='_blank' href='https://www.youtube.com/@nationalinstituteoftechnol7593'><img src='https://cdn-icons-png.flaticon.com/128/3670/3670147.png' className='header-social-media-image' /></a>
            <a target='_blank' href='https://www.facebook.com/nitukofficial/'><img src='https://cdn-icons-png.flaticon.com/128/733/733547.png' className='header-social-media-image' /></a>
            <a target='_blank' href='https://x.com/NIT_Uttarakhand'><img src='https://cdn-icons-png.flaticon.com/128/5968/5968830.png' className='header-social-media-image' /></a>
            <a target='_blank' href='https://www.instagram.com/nitukofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='><img src='https://th.bing.com/th/id/OIP.0wjhvLpjGf_-r-1lqG3QAQHaHw?rs=1&pid=ImgDetMain' className='header-social-media-image' /></a>
          </div>
          <input type='text' className='header-input-tags' />
        </div>

      </div>

      <div className='navbar'>
        <Link to={'/'} className={`navbar-links ${location.pathname==='/'?'active-link':null}`}>
          Home
        </Link>
        <Link  to={'/login'} className={`navbar-links ${location.pathname==='/login'?'active-link':null}`}>
          Login
        </Link>
        <Link to={'/stock'} className={`navbar-links ${location.pathname==='/stock'?'active-link':null}`}>
          Stock View
        </Link>
        <div className='navbar-links event-link' onMouseEnter={() => handleOpenPopup("event")} onMouseLeave={() => handleClosePopup("event")}>
          <div className='navbar-link-opt'>New Events <ArrowDropDownIcon /></div>
          {
            eventpopup && (<div className='navbar-dropdown-popup event-pop'>
              <div className='popup-notification'> Diwali Celebration</div>
              <div className='popup-notification'> Holi</div>
              <div className='popup-notification'> Independence Day</div>
              <div className='popup-notification'> Republic Day</div>
              <div className='popup-notification'> Eid al-Adha</div>
            </div>)
          }

        </div>
        <div className='navbar-links event-link' onMouseEnter={() => handleOpenPopup("helpline")} onMouseLeave={() => handleClosePopup("helpline")}>
          <div className='navbar-link-opt'>Helpline <ArrowDropDownIcon /></div>

          {
            helpline && (<div className='navbar-dropdown-popup helpline-pop'>
              <div className='popup-notification'>Disaster management : 1007</div>
            </div>)
          }

        </div>

      </div>

   {
    location.pathname==='/' &&    <div className='header-banner'>
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV0JtwxcjNmUy0HNfNwUA4bbdNgAExlepqgG2yDgpKR2emOMi79JnaSHAFMHp5FAWbhrA&usqp=CAU"} className='header-banner-image' />
      </div>
   }

    </div>
  )
}

export default Header



