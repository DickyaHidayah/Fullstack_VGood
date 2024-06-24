import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Home from '../components/Home';
import Page from '../components/Page';
import Kegiatan from '../components/Kegiatan';
import Blog from '../components/Blog';
import Tanggapan from '../components/Tanggapan';
import Footer from '../components/Footer';
import BuatAkun from '../components/BuatAkun';

const LandingPage = ({ isLoggedIn, onLogout }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDaftarClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="overflow-hidden">
      <Header  />

      <Home />
      <Page />
      <Kegiatan />
      <Blog />
      <Tanggapan />
      <Footer />

     
     
    </div>
  );
};

export default LandingPage;
