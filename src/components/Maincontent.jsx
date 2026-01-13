import React from 'react'
import '../styles/componentsCss/maincontent.css'
import DiagnosisHistory from './Diagnosishistory.jsx'
import Profileinfo from './Profileinfo.jsx'
import Diagnosticlist from './Diagnosticlist.jsx'
import Results from './Results.jsx'
const Maincontent = () => {
  return (
    <div className='main-content'>
      <DiagnosisHistory />
      <Profileinfo />
        <Diagnosticlist />
        <Results />

    </div>
  )
}

export default Maincontent
