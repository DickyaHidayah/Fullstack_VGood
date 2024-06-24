import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-10 ${isScrolled ? ' bg-[#0A65CC]' : 'bg-[#0A65CC]'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center h-full">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-35 h-12" />
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
              onClick={toggleMenu}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="hidden md:flex space-x-8 items-center mx-auto">
          <Link to="/">
            <span className="text-white font-semi-bold hover:text-blue-500">Beranda</span>
          </Link>
          <Link to="/Tentangkami">
            <span className="text-white font-semi-bold hover:text-blue-500">Tentang Kami</span>
          </Link>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-white font-semi-bold hover:text-blue-500 focus:outline-none"
            >
              Lainnya
            </button>
            <Transition
              show={isDropdownOpen}
              enter="transition ease-out duration-100 transform"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-75 transform"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="absolute mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                <Link to="/Login" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Cari Relawan</Link>
                <Link to="/Login" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Cari Organisasi</Link>
                <Link to="/Login" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Cari Proyek</Link>
                <Link to="/Donasi" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Donasi</Link>
              </div>
            </Transition>
          </div>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/">
              <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500">Beranda</span>
            </Link>
            <Link to="/Pageone">
              <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500">Tentang Kami</span>
            </Link>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500"
              onClick={toggleDropdown}
            >
              Lainnya
            </a>
            {isDropdownOpen && (
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link to="/CariRelawan" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500">Cari Relawan</Link>
                <Link to="/CariOrganisasi" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500">Cari Organisasi</Link>
                <Link to="/CariProyek" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500">Cari Proyek</Link>
                <Link to="/Donasi" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500">Donasi</Link>
              </div>
            )}
            <Link to="/Daftar">
              <button className="w-full text-black border border-black px-2 py-1 rounded-full hover:bg-black hover:text-white transition font-thin">
                Daftar
              </button>
            </Link>
            <Link to="Login">
              <button className="w-full text-black border border-black px-2 py-1 rounded-full hover:bg-black hover:text-white transition font-thin">
                Masuk
              </button>
            </Link>
          </div>
        </div>
      </Transition>
    </nav>
  );
}

export default Navbar;


