import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import tk from '../assets/tk.png';
import { FaTwitter, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

const Tentangkami = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex items-center justify-center pt-20">
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
          <img src={tk} alt="Tentang Kami" className="w-full md:w-1/2 lg:w-1/3 object-contain rounded-tl-xl rounded-bl-xl p-4" style={{ maxHeight: '400px' }} />
          <div className="flex flex-col justify-center bg-[#0A65CC] text-white shadow-lg rounded-tr-xl rounded-br-xl p-6 md:w-1/2 lg:w-2/3">
            <h2 className="text-xl mb-4 text-left">Tentang Kami</h2>
            <p className="text-left text-sm mb-4">
              VolunteersGood adalah platform online yang mempertemukan organisasi nirlaba dan relawan yang memiliki minat dan keterampilan yang sesuai. 
              Konsepnya adalah menciptakan wadah di mana organisasi dapat mencari relawan yang cocok untuk proyek-proyek mereka, sementara relawan 
              dapat menemukan kesempatan yang sesuai dengan minat dan keterampilan mereka.
            </p>
            <div className="flex justify-left mt-4 space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="w-6 h-6 text-white" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-6 h-6 text-white" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="w-6 h-6 text-white" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Tentangkami;
