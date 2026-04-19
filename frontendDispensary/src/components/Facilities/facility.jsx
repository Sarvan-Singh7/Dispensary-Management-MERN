import React from 'react'
import './facility.css'

const Facility = () => {
  return (
    <div className='facility'>
      <div className="facility-header">
        List of Facilities Available at Chitkara University Health Centre:
      </div>
      <div className="facility-lists">

        <div className="facility-list">
          <div className="facility-list-header">Ambulance:</div>
          <p className="facility-list-value">A fully equipped ambulance service is available 24×7 for students, faculty, and staff. The ambulance is stocked with an oxygen cylinder, first aid kit bag, emergency medicines, and all other necessary equipment for prompt medical response.</p>
        </div>

        <div className="facility-list">
          <div className="facility-list-header">OPD (Out-Patient Department):</div>
          <p className="facility-list-value">The Health Centre provides reliable OPD treatment services throughout the academic year. Patients are attended to by qualified medical officers and nursing staff during designated consultation hours.</p>
        </div>

        <div className="facility-list">
          <div className="facility-list-header">Doctor's Room:</div>
          <p className="facility-list-value">A dedicated consultation room is available for medical officers to examine and treat patients in a private and professional setting.</p>
        </div>

        <div className="facility-list">
          <div className="facility-list-header">Pharmacy:</div>
          <p className="facility-list-value">A fully stocked pharmacy is maintained on-site to dispense prescribed medicines and basic medical supplies to students, faculty, and staff as required.</p>
        </div>

        <div className="facility-list">
          <div className="facility-list-header">Nursing Station:</div>
          <p className="facility-list-value">A dedicated nursing station is operational at the Health Centre, managed by trained nursing staff to assist in patient care, medication administration, and routine health monitoring.</p>
        </div>

        <div className="facility-list">
          <div className="facility-list-header">Observation Room:</div>
          <p className="facility-list-value">An observation room equipped with semi-Fowler beds is available for short-term patient monitoring and care, ensuring comfort and safety for those requiring rest or observation.</p>
        </div>

        <div className="facility-list">
          <div className="facility-list-header">Gynaecologist (Visiting):</div>
          <p className="facility-list-value">Specialist gynaecological services are available at the Health Centre through scheduled visiting consultants, ensuring comprehensive women's health support for the university community.</p>
        </div>

        <div className="facility-list">
          <div className="facility-list-header">Physiotherapy (Visiting):</div>
          <p className="facility-list-value">Visiting physiotherapist services are provided at regular intervals to assist students and staff with musculoskeletal conditions, rehabilitation, and physical wellness support.</p>
        </div>

      </div>
    </div>
  )
}

export default Facility