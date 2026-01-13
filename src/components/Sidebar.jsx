import React, { useContext } from 'react'
import '../styles/componentsCss/sidebar.css'
import search from '../assets/icons/search.svg'
import more from '../assets/icons/more_horiz.svg'
import { AppContext } from '../context/AppContext'

const Sidebar = () => {

  const {patientdata}=useContext(AppContext);
    if(!patientdata){
      return <p>Loading</p>
    }

  return (
    <div className='sidebar'>
        <div className="search">
            <h4>Patients</h4>
            <span><img src={search} alt="search icon" /></span>
        </div>
        <div className="list-container">
            {patientdata.map((patient, index) => (
                <div className="patient-card" key={index}>
                    <div className='patient-info'>
                      <img src={patient.profile_picture} className='patient-logo' alt="" />
                      <div className="patient-name">{patient.name}
                        <p className='patient-details'>{patient.gender}, {patient.age}</p>
                      </div>
                      
                    </div>
                    <img className='more' src={more} alt="more options" />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Sidebar
