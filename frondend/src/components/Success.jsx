import React from 'react';
import { useNavigate } from 'react-router-dom';
import successIcon from '../assets/SuccessIcon.png'; 

const Success = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/login'); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="text-center  p-8 rounded-lg max-w-md w-full">
        <img src={successIcon} alt="Success" className="mx-auto mb-4 w-36 h-36" />
        <h2 className="text-2xl font-bold mb-2">Successfully</h2>
        <p className="text-gray-600 mb-6">Selamat anda sudah membuat akun baru. Klik tombol continue untuk login ke akun anda.</p>
        <button
          onClick={handleContinue}
          className="w-full py-2 px-4 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors "
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Success;
