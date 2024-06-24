import React from 'react';
import iconuser from '../assets/iconuser.png'; // Pastikan path ini benar

const VolunteerCard = ({ name, location, skills }) => {
  return (
    <div className="bg-white shadow-xl rounded-lg p-3 flex items-center space-x-4 mb-3 max-w-3xl mx-auto">
      <img src={iconuser} alt={`${name}'s profile`} className="w-12 h-12 rounded-full" />
      <div className="flex-1">
        <h2 className="text-md font-semibold">{name}</h2>
        <p className="text-sm text-gray-500">{location}</p>
        <p className="text-xs text-gray-500">Keahlian:</p>
        <p className="text-xs text-gray-600">{skills}</p>
      </div>
      <button className="bg-blue-600 text-white py-1 px-3 rounded-full hover:bg-blue-700 text-sm">Detail</button>
    </div>
  );
};

export default VolunteerCard;
