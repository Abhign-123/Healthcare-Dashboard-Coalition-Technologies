import React from 'react'
import '../styles/componentsCss/header.css'
import logo from '../assets/icons/TestLogo.svg'
import profilePic from '../assets/images/doctor_profile.png'
import setting from '../assets/icons/setting.svg'
import more from '../assets/icons/more.svg'
import home from '../assets/icons/home.svg'
import patients from '../assets/icons/patients.svg'
import schedule from '../assets/icons/schedule.svg'
import message from '../assets/icons/message.svg'
import transaction from '../assets/icons/transaction.svg'

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt="Healthcare Logo" className="logo" />
      <nav className="navigation">
        <ul>
            <li><span><img src={home} alt="home" className='nav-icon'></img></span>Overview</li>
            <li className='active'><span><img src={patients} alt="patients" className='nav-icon'></img></span>Patients</li>
            <li><span><img src={schedule} alt="schedule" className='nav-icon'></img></span>Schedule</li>
            <li><span><img src={message} alt="message" className='nav-icon'></img></span>Message</li>
            <li><span><img src={transaction} alt="transaction" className='nav-icon'></img></span>Transaction</li>
        </ul>
      </nav>
      <div className="doctor-info">
        <img src={profilePic} alt= " DoctorLogo" className='doctorlogo'/>
        <div className="doctor-details">
          <h6>Dr. Jose Simmons</h6>
          <p>General Practitioner</p>
        </div>
        <img src={setting} alt="Settings" className='settinglogo'/>
        <img src={more} alt="More Options" className='morelogo'/>
      </div>
    </div>
  )
}

export default Header
