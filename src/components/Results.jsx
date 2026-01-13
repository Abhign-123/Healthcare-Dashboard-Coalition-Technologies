import React, { useContext } from 'react'
import '../styles/componentsCss/results.css'
import download from '../assets/icons/download.svg'
import { AppContext } from '../context/AppContext';
const Results = () => {

  const {patientdata}=useContext(AppContext);
    if(!patientdata){
      return <p>Loading</p>
    }

  return (
    <div className='results'>
      <h4>Lab Results</h4>
      <div className="results-list">
        {patientdata[3].lab_results.map((result,index)=>{
          return(
            <div className="result-info" key={index}>
            <p>{result}</p>
            <img className ="download-icon" src={download} alt="download-icon" />
          </div>
          )
        })}
      </div>

    </div>
  )
}

export default Results
