import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import iconuser from '../assets/iconuser.png';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const relawanList = [
  {
    name: "Fuad",
    location: "Kota Baru Parahyangan, Cimahi",
    skills: "Excel, Word, Photoshop, Adobe Lightroom, Adobe Illustrator"
  },
  {
    name: "Erbie",
    location: "Kota Baru, Cimahi",
    skills: "Desain, UI/UX"
  },
  {
    name: "Raffasyah",
    location: "Jakarta Timur",
    skills: "Tenaga Medis"
  }
];

const CariRelawan = () => {
  const [provinces, setProvinces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchName, setSearchName] = useState("");
  const [searchSkill, setSearchSkill] = useState("");
  const [filteredRelawan, setFilteredRelawan] = useState(relawanList);

  useEffect(() => {
    fetch('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json')
      .then(response => response.json())
      .then(data => {
        setProvinces(data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching provinces:', error));
  }, []);

  const handleSearch = () => {
    const filtered = relawanList.filter(relawan => {
      const nameMatch = relawan.name.toLowerCase().includes(searchName.toLowerCase());
      const skillMatch = relawan.skills.toLowerCase().includes(searchSkill.toLowerCase());
      return nameMatch && skillMatch;
    });
    setFilteredRelawan(filtered);
  };

  const handleReset = () => {
    setSearchName("");
    setSearchSkill("");
    setFilteredRelawan(relawanList);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 pt-16 flex flex-col">
      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold text-left text-gray-800 mb-8">Cari Relawan</h1>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-2/3 space-y-4 mt-4 md:mt-0">
            {filteredRelawan.length > 0 ? (
              filteredRelawan.map((relawan, index) => (
                <Link to="/ProfileRelawan" className="block" key={index}>
                  <div className="bg-white p-4 rounded-md shadow-lg flex items-center cursor-pointer hover:bg-gray-100 transition-colors duration-200">
                    <img src={iconuser} alt="" className="w-14 h-14 rounded-md mr-4" />
                    <div>
                      <h3 className="text-lg font-bold">{relawan.name}</h3>
                      <p className="text-gray-600">{relawan.location}</p>
                      <div className="pt-2">
                        <div className="flex items-center mb-2">
                          <p className="text-gray-600">Keahlian :</p>
                        </div>
                        <div className="flex items-center text-gray-600 space-x-4">
                          <p className="text-gray-400 font-thin">{relawan.skills}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-center text-gray-600">Tidak ada relawan yang ditemukan.</p>
            )}

            <div className="flex justify-center mt-4">
              <nav className="flex space-x-2">
                <button className="px-4 py-2 rounded-full border bg-white">1</button>
                <button className="px-4 py-2 rounded-full border">2</button>
                <button className="px-4 py-2 rounded-full border">3</button>
                <button className="px-4 py-2 rounded-full border">4</button>
                <button className="px-4 py-2 rounded-full border">5</button>
              </nav>
            </div>
          </div>
          <div className="md:w-1/3 bg-white p-4 rounded-md shadow-lg flex-grow">
            <form className="flex flex-col h-full">
              <div className="mb-4">
                <div className="w-full">
                  <label className="block text-gray-700 mb-2" htmlFor="searchName">Nama</label>
                  <input
                    type="text"
                    id="searchName"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Cari inisial nama"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="location">Lokasi</label>
                <select id="location" className="w-full px-3 py-2 border rounded-md">
                  <option>Pilih Lokasi...</option>
                  {loading ? (
                    <option disabled>Loading...</option>
                  ) : (
                    provinces.map((province, index) => (
                      <option key={index} value={province.id}>
                        {province.name}
                      </option>
                    ))
                  )}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="searchSkill">Keahlian</label>
                <input
                  type="text"
                  id="searchSkill"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Cari berdasarkan keahlian"
                  value={searchSkill}
                  onChange={(e) => setSearchSkill(e.target.value)}
                />
              </div>

              <div>
                <button
                  type="button"
                  className="w-full bg-[#0A65CC] text-white py-2 rounded-md"
                  onClick={handleSearch}
                >
                  Cari
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="w-full bg-[#0A65CC] text-white py-2 rounded-md mt-4"
                  onClick={handleReset}
                >
                  Refresh
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CariRelawan;
