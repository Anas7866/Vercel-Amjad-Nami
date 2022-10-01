import React from 'react'
import Footer from './Components/Footer'
import Opportunites from './Components/Opportunites'
import Topbussiness from './Components/Topbussiness'
import Transectioncards from './Components/Transectioncards'
import Welcome from './Components/Welcome'
import "./Dashboardmain.scss"

function Dashboardview() {
  return (
    <div className='col-sm-12 ' >
        <Welcome/>
        <Transectioncards/>
        <Opportunites/>
        <Topbussiness/>
        <Footer/>
    </div>
  )
}

export default Dashboardview