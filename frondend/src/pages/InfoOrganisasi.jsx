import React from 'react'
import HeaderRelawan from '../components/HeaderLogin';
import ProfileOrganisasicomp from '../components/ProfileOrganisasicomp'
import Footer from "../components/Footer";

const InfoOrganisasi = () => {
  return ( 
    <div className="overflow-hidden">
      <HeaderRelawan />
      <ProfileOrganisasicomp />
      <Footer />
    </div>
  )
}

export default InfoOrganisasi;