import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderRelawan from '../components/HeaderLogin';
import Footer from "../components/Footer";
import ProjectCard from '../components/ProjectCard';
import kegiatan1 from '../assets/kegiatan1.png';
import kegiatan2 from '../assets/kegiatan2.png';
import kegiatan3 from '../assets/kegiatan3.png';
import kegiatan4 from '../assets/kegiatan4.png';

const projects = [
  {
    id: 1,
    image: kegiatan1,
    title: 'Membantu proyek konstruksi peduli iklim',
    date: '16 Mei 2024',
    location: 'Kota Parahyangan Bandung',
  },
  {
    id: 2,
    image: kegiatan2,
    title: 'Membangun peternakan ayam',
    date: '5 Juni 2024',
    location: 'Bogor',
  },
  {
    id: 3,
    image: kegiatan3,
    title: 'Memberikan perawatan gigi',
    date: '18 Juli 2024',
    location: 'Jakarta',
  },
  {
    id: 4,
    image: kegiatan4,
    title: 'Mengajarkan bahasa Inggris',
    date: '19 Agustus 2024',
    location: 'Depok',
  },
];

const locations = [
  'Kota Parahyangan Bandung',
  'Bogor',
  'Jakarta',
  'Depok',
];

const CariProyek = () => {
  const [filterLocation, setFilterLocation] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleLocationChange = (event) => {
    setFilterLocation(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProjects = projects.filter((project) => {
    return (
      (filterLocation === '' || project.location === filterLocation) &&
      (searchQuery === '' || project.title.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderRelawan />
      <div className="container mx-auto p-8 pt-16">
        <h1 className="text-3xl font-bold text-left text-gray-800 mb-8">Cari Proyek</h1>
        <div className="flex flex-col md:flex-row md:space-x-4 mb-8">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Cari Proyek..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full p-4 rounded-lg border border-gray-300"
            />
          </div>
          <div>
            <select
              value={filterLocation}
              onChange={handleLocationChange}
              className="w-full p-4 rounded-lg border border-gray-300"
            >
              <option value="">Semua Lokasi</option>
              {locations.map((location, index) => (
                <option key={index} value={location}>{location}</option>
              ))}
            </select>
          </div>
          <button className="ml-4 p-4 bg-blue-500 text-white rounded-lg">Cari</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-8">
          {filteredProjects.map((project, index) => (
            <Link to='/DetailProyek' key={index}>
              <ProjectCard
                image={project.image}
                title={project.title}
                date={project.date}
                location={project.location}
              />
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <nav className="inline-flex">
            <button className="h-10 w-10 mx-1 text-gray-600 rounded-full bg-white hover:bg-gray-200">1</button>
            <button className="h-10 w-10 mx-1 text-gray-600 rounded-full bg-white hover:bg-gray-200">2</button>
            <button className="h-10 w-10 mx-1 text-gray-600 rounded-full bg-white hover:bg-gray-200">3</button>
            <button className="h-10 w-10 mx-1 text-gray-600 rounded-full bg-white hover:bg-gray-200">4</button>
            <button className="h-10 w-10 mx-1 text-gray-600 rounded-full bg-white hover:bg-gray-200">5</button>
          </nav>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CariProyek;
