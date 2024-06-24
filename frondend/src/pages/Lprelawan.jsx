import React from 'react';
import HeaderLogin from '../components/HeaderLogin'; 
import Homerel from "../components/Homerel";
import { Link } from "react-router-dom";
import Kegiatan from "../components/Kegiatan";
import Blog from "../components/Blog";
import Keunggulan from "../components/Tanggapan";
import Footer from "../components/Footer";
import Proyek from "../assets/proyek.png";
import Organisasi from "../assets/organisasi.png";
import Donasi from "../assets/donasi.png";

const Lprelawan = () => {
  return (
    <div className="overflow-hidden">
      <HeaderLogin /> 
      <Homerel />
      <div className="pt-20 px-4 lg:px-16">
        <div className="flex flex-wrap justify-center gap-20">
          <div className="w-full sm:w-64 md:w-60 lg:w-60 bg-white rounded-2xl shadow-xl flex flex-col items-center text-center p-6 mt-4 ">
            <img src={Organisasi} alt="Organisasi" className="w-24 h-24 mb-4" />
            <h3 className="font-bold text-lg">Organisasi</h3>
            <p className="font-thin mt-2 mb-4">Bergabunglah dengan organisasi yang sesuai dengan kemampuan kamu</p>
            <Link to="/CariOrganisasi" className="bg-[#0A65CC] w-32 h-10 rounded-lg flex items-center justify-center text-white font-semibold mt-5">Cari Organisasi</Link>
          </div>
          <div className="w-full sm:w-64 md:w-60 lg:w-60 bg-white rounded-2xl shadow-md flex flex-col items-center text-center p-6 mt-4 ">
            <img src={Proyek} alt="Proyek" className="w-24 h-24 mb-4" />
            <h3 className="font-bold text-lg">Proyek</h3>
            <p className="font-thin mt-2 mb-4">Carilah proyek yang sesuai dengan passion kamu dan jangan salah pilih</p>
            <Link to="/CariProyek" className="bg-[#0A65CC] w-32 h-10 rounded-lg flex items-center justify-center text-white font-semibold mt-5">Cari Proyek</Link>
          </div>
          <div className="w-full sm:w-64 md:w-60 lg:w-60 bg-white rounded-2xl shadow-md flex flex-col items-center text-center p-6 mt-4 ">
            <img src={Donasi} alt="Donasi" className="w-24 h-24 mb-4" />
            <h3 className="font-bold text-lg">Donasi</h3>
            <p className="font-thin mt-2 mb-4">Ayo sisihkan penghasilan anda untuk orang yang lebih membutuhkan</p>
            <Link to="/Donate" className="bg-[#0A65CC] w-32 h-10 rounded-lg flex items-center justify-center text-white font-semibold mt-5">Donasi</Link>
          </div>
        </div>
      </div>
      <Kegiatan />
      <Blog />
      <Keunggulan />
      <Footer />
    </div>
  )
}

export default Lprelawan;
