import React from 'react'
import HeaderRelawan from '../components/HeaderLogin';
import Dashboardrel from '../components/Dashboardrel'
import Footer from "../components/Footer";

const Dashboardrelawan = () => {
  return ( 
    <div className="overflow-hidden">
      <HeaderRelawan />
      <Dashboardrel />
      <Footer />
    </div>
  )
}

export default Dashboardrelawan;