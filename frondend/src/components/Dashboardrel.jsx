import React from 'react';
import { useNavigate } from 'react-router-dom';
import dashboard1 from '../assets/dashboard1.png';
import dashboard2 from '../assets/dashboard2.png';
import iconorganisasi from '../assets/iconorganisasi.png';
import article from '../assets/Dashboard/article.png';
import proyek from '../assets/Dashboard/proyek.png';
import relawan from '../assets/Dashboard/relawan.png';
import jam from '../assets/Dashboard/jam.png';

const Dashboardrel = () => {
  const navigate = useNavigate(); 

  const handleProfileClick = () => {
    navigate('/Profilerelawan'); 
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 pt-16">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-left text-gray-800 mb-8">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold mb-4">Organisasi</h2>
            <div className="flex items-center mb-4 m-5">
              <img src={dashboard1} alt="" className="w-20 h-16 " />
              <p className="text-4xl font-bold text-gray-500 ml-5">77</p> 
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold mb-4">Proyek</h2>
            <div className="flex items-center mb-4 m-5">
              <img src={dashboard2} alt="" className="w-20 h-16 " />
              <p className="text-4xl font-bold text-gray-500 ml-5">77</p> 
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold mb-4">Mengikuti Proyek</h2>
            <div className="flex items-center mb-4 m-5">
              <img src={dashboard1} alt="" className="w-20 h-16 " />
              <p className="text-4xl font-bold text-gray-500 ml-5">3</p> 
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Organisasi Sering diikuti</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
              <div className="flex items-center mb-4">
                <img src={iconorganisasi} alt="FYP Media" className="w-12 h-12 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">FYP Media</h3>
                  <p className="text-gray-600">Kota Baru Parahyangan, Cimahi</p>
                </div>
              </div>
              <div className="flex items-center text-gray-600 mb-4 ml-16">
                <img src={article} alt="Artikel" className="w-6 h-6 mr-2" />
                <span>Artikel</span>
              </div>
              <div className="flex items-center ml-16 text-gray-600">
                <img src={proyek} alt="Proyek" className="w-4 h-4 mr-2" />
                <span className="mr-4">2 Proyek</span>
                <img src={relawan} alt="Relawan" className="w-4 h-4 mr-2" />
                <span className="mr-4">4 Relawan</span>
                <img src={jam} alt="Jam" className="w-4 h-4 mr-2" />
                <span>2 Jam</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
              <div className="flex items-center mb-4">
                <img src={iconorganisasi} alt="FYP Media" className="w-12 h-12 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">FYP Media</h3>
                  <p className="text-gray-600">Kota Baru Parahyangan, Cimahi</p>
                </div>
              </div>
              <div className="flex items-center text-gray-600 mb-4 ml-16">
                <img src={article} alt="Artikel" className="w-6 h-6 mr-2" />
                <span>Artikel</span>
              </div>
              <div className="flex items-center ml-16 text-gray-600">
                <img src={proyek} alt="Proyek" className="w-4 h-4 mr-2" />
                <span className="mr-4">2 Proyek</span>
                <img src={relawan} alt="Relawan" className="w-4 h-4 mr-2" />
                <span className="mr-4">4 Relawan</span>
                <img src={jam} alt="Jam" className="w-4 h-4 mr-2" />
                <span>2 Jam</span>
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <nav className="inline-flex">
                <button className="h-10 w-10 mx-1 text-gray-600 rounded-full bg-white hover:bg-gray-200">1</button>
                <button className="h-10 w-10 mx-1 text-gray-600 rounded-full bg-white hover:bg-gray-200">2</button>
                <button className="h-10 w-10 mx-1 text-gray-600 rounded-full bg-white hover:bg-gray-200">3</button>
                <button className="h-10 w-10 mx-1 text-gray-600 rounded-full bg-white hover:bg-gray-200">4</button>
                <button className="h-10 w-10 mx-1 text-gray-600 rounded-full bg-white hover:bg-gray-200">5</button>
              </nav>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Muhammad Erbie Raffasyah</h2>
            <p className="text-gray-600 mb-4">Mahasiswa</p>
            <p className="text-gray-600 mb-4">Cilodong, Depok, Jawa Barat, Indonesia</p>
            <p className="text-gray-600 mb-4">Raffasyah@gmail.com</p>
            <p className="text-gray-600 mb-4">Cilodong, Depok, Jawa Barat, Indonesia</p>
            <p className="text-gray-600 mb-4">089543132432432232</p>
            <p className="text-gray-600 mb-4">Public Speaking, MC, Bahasa Inggris, Power Point, Word</p>
            <div className="flex justify-center">
              <button 
                className="w-1/2 bg-[#0A65CC] text-white py-1 px-2 text-sm rounded-full" 
                onClick={handleProfileClick} 
              >
                Lihat Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardrel;
