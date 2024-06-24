import React from 'react';
import successIcon from '../assets/SuccessIcon.png'; 

const SuccessDaftar = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          X
        </button>
        <div className="text-center">
          <img src={successIcon} alt="Success" className="mx-auto mb-4 w-36 h-36" />
          <h2 className="text-2xl font-bold mb-2">Pendaftaran Berhasil</h2>
          <p className="text-gray-600 mb-6">Formulir pendaftaran Anda berhasil dikirim.</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessDaftar;
