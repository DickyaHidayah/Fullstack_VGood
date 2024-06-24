import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProfileOrganization from '../components/ProfileOrganization'; 

const ProfilePage = () => {
  return (
    <div>
      <Navbar />
      <ProfileOrganization />
      <Footer />
    </div>
  );
};

export default ProfilePage;
