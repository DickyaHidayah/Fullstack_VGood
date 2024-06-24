import React from 'react'
import HeaderOrganisasi from '../components/HeaderOrganisasi';
import DashboardOrganisasi from '../components/DashboardOrganisasi';
import Footer from "../components/Footer";

const Dashboardrelawan = () => {
  return ( 
    <div className="overflow-hidden">
      <HeaderOrganisasi />
      <DashboardOrganisasi />
      <Footer />
    </div>
  )
}

export default Dashboardrelawan;