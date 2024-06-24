import React from 'react'
import HeaderRelawan from '../components/HeaderLogin';
import Profile from '../components/Profile'
import Footer from "../components/Footer";

const ProfileRelawan = () => {
  return ( 
    <div className="overflow-hidden">
      <HeaderRelawan />
      <Profile />
      <Footer />
    </div>
  )
}

export default ProfileRelawan;