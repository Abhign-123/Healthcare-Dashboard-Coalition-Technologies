import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext.js'
import '../styles/componentsCss/profileinfo.css'
import dob from '../assets/icons/BirthIcon.svg'
import contact from '../assets/icons/PhoneIcon.svg'
import insurance from '../assets/icons/InsuranceIcon.svg'
import female from '../assets/icons/FemaleIcon.svg'
const Profileinfo = () => {

  const {patientdata}=useContext(AppContext);
  if (!patientdata) return <p>Loading...</p>;

  return (
    <div className='profile-info'>
      <div className="patient-profile">
        <img className='patient-image' src="https://fedskillstest.ct.digital/4.png" alt="Patient" />
        <h4>{patientdata[3].name}</h4>
        

      </div>
      <div className="details">
        <img className='dob-icon' src={dob} alt="dob icon" />
        <div className="info">
          <p className='detail1'>Date of Birth</p>
          <p className='detail2'>
            {new Date(patientdata[3].date_of_birth).toLocaleDateString(
                "en-US",
                { month: "long", day: "numeric", year: "numeric" }
              )}
          </p>
        </div>
      </div>
      <div className="details">
        <img className='dob-icon' src={female} alt="dob icon" />
        <div className="info">
          <p className='detail1'>Gender</p>
          <p className='detail2'>{patientdata[3].gender}</p>
        </div>
      </div>
      <div className="details">
        <img className='dob-icon' src={contact} alt="dob icon" />
        <div className="info">
          <p className='detail1'>Contact Info</p>
          <p className='detail2'>{patientdata[3].phone_number}</p>
        </div>
      </div>
      <div className="details">
        <img className='dob-icon' src={contact} alt="dob icon" />
        <div className="info">
          <p className='detail1'>Emergency Contacts</p>
          <p className='detail2'>{patientdata[3].emergency_contact}</p>
        </div>
      </div>
      <div className="details">
        <img className='dob-icon' src={insurance} alt="dob icon" />
        <div className="info">
          <p className='detail1'>Insurance Provider</p>
          <p className='detail2'>{patientdata[3].insurance_type}</p>
        </div>
      </div>
      <button className='edit-btn'>Show All Information</button>
    </div>
  )
}

export default Profileinfo
