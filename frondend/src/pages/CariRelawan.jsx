import React from 'react'
import HeaderOrganisasi from "../components/HeaderOrganisasi"
import CariRelawan from '../components/CariRelawan'
import Footer from "../components/Footer";

const Dashboardrelawan = () => {
  return ( 
    <div className="overflow-hidden">
      <HeaderOrganisasi />
      <CariRelawan />
      <Footer />
    </div>
  )
}

export default Dashboardrelawan;