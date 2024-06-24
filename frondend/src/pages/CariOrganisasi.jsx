import React from 'react'
import HeaderRelawan from '../components/HeaderLogin';
import CariOrganisasicomp from '../components/CariOrganisasicomp'
import Footer from "../components/Footer";

const CariOrganisasi = () => {
  return ( 
    <div className="overflow-hidden">
      <HeaderRelawan />
      <CariOrganisasicomp />
      <Footer />
    </div>
  )
}

export default CariOrganisasi;