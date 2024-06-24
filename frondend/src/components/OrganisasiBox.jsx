import React from 'react';
import article from '../assets/Dashboard/article.png';
import proyek from '../assets/Dashboard/proyek.png';
import relawan from '../assets/Dashboard/relawan.png';
import jam from '../assets/Dashboard/jam.png';

const OrganisasiBox = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-lg flex items-center mb-4">
      <img src={data.image} alt="" className="w-14 h-14 rounded-md mr-4" />
      <div>
        <h3 className="text-lg font-bold">{data.name}</h3>
        <p className="text-gray-600">{data.location}</p>
        <div className="pt-2">
          <div className="flex items-center mb-2">
            <img src={data.categoryIcon} alt="Kategori" className="w-5 h-5 mr-2" />
            <p className="text-gray-600">{data.category}</p>
          </div>
          <div className="flex items-center text-gray-600 space-x-4">
            <div className="flex items-center">
              <img src={proyek} alt="Proyek" className="w-4 h-4 mr-1" />
              <span>{data.projectCount} Proyek</span>
            </div>
            <div className="flex items-center">
              <img src={relawan} alt="Relawan" className="w-4 h-4 mr-1" />
              <span>{data.volunteerCount} Relawan</span>
            </div>
            <div className="flex items-center">
              <img src={jam} alt="Jam" className="w-4 h-4 mr-1" />
              <span>{data.hours} Jam</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganisasiBox;
