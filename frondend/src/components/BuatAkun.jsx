import React from 'react';
import { Link } from 'react-router-dom';
import { MdCancel } from 'react-icons/md'; 
import buatuser from '../assets/buatuser.png';
import buatorganisasi from '../assets/buatorganisasi.png';

const BuatAkun = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-8 shadow-lg w-96 text-center relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <MdCancel className="h-6 w-6" /> 
        </button>
        <h2 className="text-2xl font-bold mb-6">Buat Akun</h2>
        <div className="flex justify-around">
          <Link to="/DaftarRelawan" className="no-underline">
            <div className="flex flex-col items-center justify-center w-32 h-32 bg-white rounded-xl cursor-pointer transition-colors duration-300 hover:bg-blue-700">
              <img
                src={buatuser}
                alt="Buat Relawan"
                className="w-12 h-12 mb-2 object-contain"
              />
              <span className="text-lg font-medium">Relawan</span>
            </div>
          </Link>
          <Link to="/DaftarOrganisasi" className="no-underline">
            <div className="flex flex-col items-center justify-center w-32 h-32 bg-white rounded-xl cursor-pointer transition-colors duration-300 hover:bg-blue-700">
              <img
                src={buatorganisasi}
                alt="Buat Organisasi"
                className="w-12 h-12 mb-2 object-contain"
              />
              <span className="text-lg font-medium">Organisasi</span>
            </div>
          </Link>
        </div>
        <p className="mt-6 text-gray-600">Bergabung dengan VolunteersGood sebagai Relawan atau sebagai Organisasi</p>
      </div>
    </div>
  );
};

export default BuatAkun;
