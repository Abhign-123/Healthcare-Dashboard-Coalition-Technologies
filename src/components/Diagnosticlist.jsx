import React, { useContext } from 'react'
import '../styles/componentsCss/diagnosticlist.css'
import { AppContext } from '../context/AppContext';

const Diagnosticlist = () => {

  const {patientdata}=useContext(AppContext);
    if(!patientdata){
      return <p>Loading</p>
    }    

  return (
    <div className='diagnostic-list'>
      <h4 className='diagnostic-list-title'>Diagnostic List</h4>
      <div className="headbar">
        <span className="headbar-item">Problem/Diagnosis</span>
        <span className="headbar-item">Description</span>
        <span className="headbar-item">Status</span>
      </div>
      <div className="diagnostic-list-items">
        {patientdata[3].diagnostic_list.map((item, index) => (
          <div className="diagnostic-list-item" key={index}>
            <span className="diagnostic-column">{item.name}</span>
            <span className="diagnostic-column">{item.description}</span>
            <span className="diagnostic-column">{item.status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Diagnosticlist
