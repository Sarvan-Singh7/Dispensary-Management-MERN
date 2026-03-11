
import React from 'react'
import './aboutus.css'
const AboutUs = () => {
  return (
    <div className='about-us'>
      <p>The health and wellness needs of the Chitkara University community — including students,
        faculty, staff members, and their families — are comprehensively served by the University
        Health Center located on campus. The Health Center provides reliable OPD services
        throughout the academic year, with specialist services in Gynaecology and Physiotherapy
        available through visiting consultants. A fully equipped Ambulance operates <strong>24×7</strong>,
        stocked with an oxygen cylinder, first aid kit, emergency medicines, and all necessary
        life-support equipment.</p>

      <a className='about-link' href='https://www.chitkara.edu.in/' target='_blank'>Chitkara University</a>

      <p className = 'about-staffHeader'>Staff Members</p>
      <ul>
        <li>Dr. Anil Kumar (Medical Officer)</li>
        <li>Ms. Suman (Nursing Staff)</li>
        <li>Ms. Renu (Nursing Staff)</li>
        <li>Mr. Rakesh Kumar (Office Attendant)</li>
      </ul>
    </div>
  )
}

export default AboutUs
