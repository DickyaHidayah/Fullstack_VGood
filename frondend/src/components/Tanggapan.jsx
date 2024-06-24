import React from "react";
import tanggapan from "../assets/tanggapan.png";

const Tanggapan = () => {
  return (
    <div className="pt-20 px-4 lg:px-16">
      <h1 className="font-bold text-3xl text-center mb-8">Tanggapan Orang</h1>
      <p className="text-center text-base text-gray-600 px-6 lg:px-0">
        Beberapa pendapat orang lain terhadap VolunteersGood.
      </p>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between lg:space-x-6 mt-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full lg:w-80 m-2">
          <div className="flex items-center justify-center">
            <img src={tanggapan} alt="" className="w-24 h-auto object-cover"/>
          </div>
          <div className="p-4 text-center">
            <h3 className="font-bold">Teruntuk Website</h3>
            <p className="text-gray-600 mt-4"> 
              Platform VolunteersGood sangat mudah digunakan dan dapat
              menyatukan kebaikan, kami bisa bertemu dengan relawan dan
              organisasi nirlaba sehingga dapat memperluas jangkauan kami.
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full lg:w-80 m-2">
          <div className="flex items-center justify-center">
            <img src={tanggapan} alt="" className="w-24 h-auto object-cover"/>
          </div>
          <div className="p-4 text-center">
            <h3 className="font-bold">Teruntuk Website</h3>
            <p className="text-gray-600 mt-4"> 
              Platform VolunteersGood sangat mudah digunakan dan dapat
              menyatukan kebaikan, kami bisa bertemu dengan relawan dan
              organisasi nirlaba sehingga dapat memperluas jangkauan kami.
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full lg:w-80 m-2">
          <div className="flex items-center justify-center">
            <img src={tanggapan} alt="" className="w-24 h-auto object-cover"/>
          </div>
          <div className="p-4 text-center">
            <h3 className="font-bold">Teruntuk Website</h3>
            <p className="text-gray-600 mt-4"> {/* Added margin-top */}
              Platform VolunteersGood sangat mudah digunakan dan dapat
              menyatukan kebaikan, kami bisa bertemu dengan relawan dan
              organisasi nirlaba sehingga dapat memperluas jangkauan kami.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tanggapan;
