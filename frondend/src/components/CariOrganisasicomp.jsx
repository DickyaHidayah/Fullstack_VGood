import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import iconorganisasi from '../assets/iconorganisasi.png';
import organisasi1 from '../assets/organisasi1.png';
import tanggapan from '../assets/tanggapan.png';
import diskusi from '../assets/diskusi.png';
import edukasi from '../assets/edukasi.png';
import article from '../assets/Dashboard/article.png';
import proyek from '../assets/Dashboard/proyek.png';
import relawan from '../assets/Dashboard/relawan.png';
import jam from '../assets/Dashboard/jam.png';

const organisasiList = [
  {
    name: "Yayasan Hutan, Alam dan Lingkungan Aceh",
    location: "Aceh",
    category: "Lingkungan",
    focus: "Edukasi",
    projects: 2,
    volunteers: 4,
    hours: 2,
    icon: iconorganisasi,
  },
  {
    name: "Yayasan Sinar Tani Indonesia (Sintesa)",
    location: "Sumatera Utara",
    category: "Pertanian",
    focus: "Diskusi",
    projects: 1,
    volunteers: 3,
    hours: 3,
    icon: tanggapan,
  },
  {
    name: "Fitra Riau",
    location: "Riau",
    category: "Edukasi",
    focus: "Artikel",
    projects: 2,
    volunteers: 4,
    hours: 2,
    icon: organisasi1,
  },
  {
    name: "Pusat kemanusiaan AMCF",
    location: "Jawa Barat",
    category: "Kemanusiaan",
    focus: "Diskusi",
    projects: 2,
    volunteers: 4,
    hours: 2,
    icon: tanggapan,
  },
];

const CariOrganisasi = () => {
  const [provinces, setProvinces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchName, setSearchName] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [searchFocus, setSearchFocus] = useState("");
  const [filteredOrganisasi, setFilteredOrganisasi] = useState(organisasiList);

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
    const filtered = organisasiList.filter(organisasi => {
      const nameMatch = organisasi.name.toLowerCase().includes(searchName.toLowerCase());
      const locationMatch = organisasi.location.toLowerCase().includes(searchLocation.toLowerCase());
      const categoryMatch = organisasi.category.toLowerCase().includes(searchCategory.toLowerCase());
      const focusMatch = organisasi.focus.toLowerCase().includes(searchFocus.toLowerCase());
      return nameMatch && locationMatch && categoryMatch && focusMatch;
    });
    setFilteredOrganisasi(filtered);
  };

  const handleReset = () => {
    setSearchName("");
    setSearchLocation("");
    setSearchCategory("");
    setSearchFocus("");
    setFilteredOrganisasi(organisasiList);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 pt-16 flex flex-col">
      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold text-left text-gray-800 mb-8">Cari Organisasi</h1>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-2/3 space-y-4 mt-4 md:mt-0">
            {filteredOrganisasi.length > 0 ? (
              filteredOrganisasi.map((organisasi, index) => (
                <Link to="/InfoOrganisasi" className="block" key={index}>
                  <div className="bg-white p-4 rounded-md shadow-lg flex items-center cursor-pointer hover:bg-gray-100 transition-colors duration-200">
                    <img src={organisasi.icon} alt="" className="w-14 h-14 rounded-md mr-4" />
                    <div>
                      <h3 className="text-lg font-bold">{organisasi.name}</h3>
                      <p className="text-gray-600">{organisasi.location}</p>
                      <div className="pt-2">
                        <div className="flex items-center mb-2">
                          <img src={article} alt="Artikel" className="w-5 h-5 mr-2" />
                          <p className="text-gray-600">{organisasi.focus}</p>
                        </div>
                        <div className="flex items-center text-gray-600 space-x-4">
                          <div className="flex items-center">
                            <img src={proyek} alt="Proyek" className="w-4 h-4 mr-1" />
                            <span>{organisasi.projects} Proyek</span>
                          </div>
                          <div className="flex items-center">
                            <img src={relawan} alt="Relawan" className="w-4 h-4 mr-1" />
                            <span>{organisasi.volunteers} Relawan</span>
                          </div>
                          <div className="flex items-center">
                            <img src={jam} alt="Jam" className="w-4 h-4 mr-1" />
                            <span>{organisasi.hours} Jam</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-center text-gray-600">Tidak ada organisasi yang ditemukan.</p>
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
                    placeholder="Cari nama organisasi"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="location">Lokasi</label>
                <select
                  id="location"
                  className="w-full px-3 py-2 border rounded-md"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                >
                  <option value="">Pilih Lokasi...</option>
                  {loading ? (
                    <option disabled>Loading...</option>
                  ) : (
                    provinces.map((province, index) => (
                      <option key={index} value={province.name}>
                        {province.name}
                      </option>
                    ))
                  )}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="category">Kategori</label>
                <input
                  type="text"
                  id="category"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Cari berdasarkan kategori"
                  value={searchCategory}
                  onChange={(e) => setSearchCategory(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="focus">Fokus</label>
                <input
                  type="text"
                  id="focus"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Cari berdasarkan fokus"
                  value={searchFocus}
                  onChange={(e) => setSearchFocus(e.target.value)}
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
              <div className="mt-4">
                <button
                  type="button"
                  className="w-full bg-blue-500 text-white py-2 rounded-md"
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

export default CariOrganisasi;
