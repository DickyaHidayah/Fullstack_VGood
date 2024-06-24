import React from 'react'
import HeaderOrganisasi from '../components/HeaderOrganisasi';
import Keunggulan from "../components/Tanggapan";
import Footer from "../components/Footer";
import Blog from "../components/Blog";
import Relawan from "../assets/relawan.png"
import Donasi from "../assets/donasi.png"
import { Link } from "react-router-dom";
import VolunteerList from '../components/VolunteerList';
import HomeOrganisasi from '../components/HomeOrganisasi';

const Lporganisasi = () => {
  return ( 
    <div className="overflow-hidden">
      <HeaderOrganisasi />
      <HomeOrganisasi />
      <div className="pt-20 px-4 lg:px-16">
      <div className="flex flex-wrap justify-center gap-20">
        <div className="w-full sm:w-64 md:w-60 lg:w-60 bg-white rounded-2xl shadow-xl flex flex-col items-center text-center p-6 mt-4 ">
          <img src={Relawan} alt="Relawan" className="w-24 h-24 mb-4" />
          <h3 className="font-bold text-lg">Relawan</h3>
          <p className="font-thin mt-2 mb-4">Ayo cari relawan yang sesuai dengan kriteria dan kebutuhan proyek anda</p>
          <Link to="/organisasi" className="bg-[#0A65CC] w-32 h-10 rounded-lg flex items-center justify-center text-white font-semibold mt-5">Cari Relawan</Link>
        </div>
       
        <div className="w-full sm:w-64 md:w-60 lg:w-60 bg-white rounded-2xl shadow-md flex flex-col items-center text-center p-6 mt-4 ">
          <img src={Donasi} alt="Donasi" className="w-24 h-24 mb-4" />
          <h3 className="font-bold text-lg">Donasi</h3>
          <p className="font-thin mt-2 mb-4">Ayo sisihkan penghasilan anda untuk orang yang lebih membutuhkan</p>
          <Link to="/donasi" className="bg-[#0A65CC] w-32 h-10 rounded-lg flex items-center justify-center text-white font-semibold mt-5">Donasi</Link>
        </div>
      </div>
    </div>
     <VolunteerList />
     <Blog />
      <Keunggulan />
      <Footer />
    </div>
  )
}

export default Lporganisasi;