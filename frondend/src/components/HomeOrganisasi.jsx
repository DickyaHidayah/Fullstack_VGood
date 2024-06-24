import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const HomeOrganisasi = () => {
    return (
        <div 
            id="homeorga" 
            className="w-full min-h-screen bg-cover bg-center flex items-end px-5" 
        >
            <div className="max-w-[1440px] w-full mx-auto pb-10 lg:pb-20 px-5 lg:px-[72px]">
                <div className="max-w-[600px] flex flex-col gap-y-5">
                    <h1 className="font-bold text-5xl leading-normal text-white text-[30px]">
                        Temukan relawan yang sesuai dengan proyek anda <span className="text-[#5FF5FF]">Volunteers Good</span>
                    </h1>
                    <div className="relative mb-20">
                        <Link to="/CariRelawan">
                            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" style={{ color: '#0A65CC' }} />
                        </Link>
                        <input 
                            type="text" 
                            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring focus:border-blue-300" 
                            placeholder="Cari Relawan"  
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeOrganisasi;
