import React from 'react'
import './styles/global.css'
import Header from './components/header.jsx'
import Sidebar from './components/sidebar.jsx'
import Maincontent from './components/Maincontent.jsx'



function App() {
      
  return (
    <>
      <Header />
      <Sidebar  />
      <Maincontent />
      
    </>
  )
}

export default App
