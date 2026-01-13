import React from 'react'
import  '../styles/componentsCss/diagnosishistory.css'
import  heart from '../assets/icons/HeartBPM.svg'
import  respiratory from '../assets/icons/respiratoryrate.svg'
import temp from '../assets/icons/temperature.svg'
import dropdown from '../assets/icons/expand_more.svg'
import arrowdown from '../assets/icons/ArrowDown.svg'
import arrowup from '../assets/icons/ArrowUp.svg'
import Linechart from './charts/Linechart.jsx'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext.js'
const DiagnosisHistory = () => {
        
  const {patientdata}=useContext(AppContext);
  if(!patientdata){
    return <p>Loading</p>
  }

  return (
    <div className='diagnosis-history'>
      <h4>Diagnosis History</h4>
      <div className="chart">
        <div className="linechart">
          <div className='chartname'>
            Blood Pressure
            <span style={{ background:"none"}}>
              Last 6 months
              <img src={dropdown} alt='dropdown'/>
            </span>
          </div>
          <Linechart />
        </div>
        <div className="chart-details">
          <div className='detail-top'>
            <p className='name1'>Systolic</p>
            <p className='name2'>{patientdata[3].diagnosis_history[0].blood_pressure.systolic.value}</p>
            <p className='name3'>
              <span><img id='arrowUp' src={arrowup} alt='arrowup'/></span>
              {patientdata[3].diagnosis_history[0].blood_pressure.systolic.levels}
            </p>
          </div>
          <hr style={{ border: 0, borderTop: "2px solid #ccc" }} />
          <div className='detail-bottom'>
            <p className='name1'>Diastolic</p>
            <p className='name2'>{patientdata[3].diagnosis_history[0].blood_pressure.diastolic.value}</p>
            <p className='name3'>
              <span><img id='arrowDown' src={arrowdown} alt='arrowdown'/></span>
              {patientdata[3].diagnosis_history[0].blood_pressure.diastolic.levels}
            </p>
          </div>
        </div>
      </div>
      <div className="parameters">
        <div className='parameter' id='one'>
          <img src={respiratory} alt="respiratory" className='param-icon'/>
          <div className="param-details">
            <p className='top'>Respiratory Rate</p>
            <p className='middle'>{patientdata[3].diagnosis_history[0].respiratory_rate.value} bpm</p>
            <p className='bottom'>{patientdata[3].diagnosis_history[0].respiratory_rate.levels}</p>
          </div>
        </div>
        <div className='parameter' id='two'>
          <img src={temp} alt="temperature" className='param-icon'/>
          <div className="param-details">
            <p className='top'>Temperature</p>
            <p className='middle'>{patientdata[3].diagnosis_history[0].temperature.value}°F</p>
            <p className='bottom'>{patientdata[3].diagnosis_history[0].temperature.levels}</p>
          </div>
        </div>
        <div className='parameter' id='three'>
          <img src={heart} alt="heart bpm" className='param-icon'/>
          <div className="param-details">
            <p className='top'>Heart Rate</p>
            <p className='middle'>{patientdata[3].diagnosis_history[0].heart_rate.value} bpm</p>
            <p className='bottom'>{patientdata[3].diagnosis_history[0].heart_rate.levels}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiagnosisHistory
