import React, { useState, useEffect, Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import classNames from 'classnames';
import iconuser from '../assets/iconuser.png';
import iconorganisasi from '../assets/iconorganisasi.png';
import logo from '../assets/logo.png';
import BuatAkun from '../components/BuatAkun';

const Header = ({ isLoggedIn, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userRole, setUserRole] = useState(null); 
  const navigate = useNavigate();

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

  const handleDaftarClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSignOut = () => {
    setUserRole(null);
    onLogout(); 
    navigate('/'); 
  };

  const handleLogin = (role) => {
    setUserRole(role);
    if (role === 'relawan') {
      navigate('/Lprelawan');
    } else if (role === 'organisasi') {
      navigate('/LpOrganisasi');
    }
  };

  const CommonNavItems = () => (
    <>
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
    </>
  );

  const RelawanNav = () => (
    <>
      <Link to="/Lprelawan">
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
            <Link to="/CariOrganisasi" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Cari Organisasi</Link>
            <Link to="/CariProyek" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Cari Proyek</Link>
            <Link to="/Donate" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Donasi</Link>
          </div>
        </Transition>
      </div>
    </>
  );

  const OrganisasiNav = () => (
    <>
      <Link to="/LpOrganisasi">
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
            <Link to="/CariRelawan" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Cari Relawan</Link>
            <Link to="/Donate" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Donasi</Link>
          </div>
        </Transition>
      </div>
    </>
  );

  return (
    <>
      <nav className={`fixed w-full z-10 ${isScrolled ? 'shadow-lg bg-[#0A65CC]' : 'bg-'}`}>
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
            {userRole === 'relawan' ? <RelawanNav /> : userRole === 'organisasi' ? <OrganisasiNav /> : <CommonNavItems />}
          </div>
          <div className="hidden md:flex space-x-2">
            {userRole ? (
              <Menu as="div" className="relative">
                <div>
                  <Menu.Button className="ml-2 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
                    <span className="sr-only">Open user menu</span>
                    <div className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center">
                      <img src={userRole === 'relawan' ? iconuser : iconorganisasi} alt="User" className="h-10 w-10 rounded-full" />
                    </div>
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/Profile"
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-700'
                          )}
                        >
                          Profile
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={handleSignOut}
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-700 w-full text-left'
                          )}
                        >
                          Sign out
                        </button>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            ) : (
              <>
                <button onClick={handleDaftarClick} className="bg-blue-500 text-white font-semi-bold px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none">Daftar</button>
                <Link to="/Login" className="bg-white text-blue-500 font-semi-bold px-4 py-2 rounded-full hover:bg-gray-100 focus:outline-none">Masuk</Link>
              </>
            )}
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <CommonNavItems />
            </div>
          </div>
        )}
      </nav>
      {isModalOpen && <BuatAkun isOpen={isModalOpen} onClose={handleCloseModal} onLogin={handleLogin} />}
    </>
  );
};

export default Header;
