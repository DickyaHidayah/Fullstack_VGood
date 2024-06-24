import React, { useState } from 'react';
import iconorganisasi from '../assets/iconorganisasi.png';
import { FaRegUser } from "react-icons/fa";
import { CiClock2 } from 'react-icons/ci';
import { IoLayersOutline } from 'react-icons/io5';
import { TfiEmail } from 'react-icons/tfi';
import { TfiLocationPin } from 'react-icons/tfi';
import { IoCallOutline } from 'react-icons/io5';

const ProfileOrganization = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'FYP Media',
    description: 'FYP Media adalah perusahaan yang bergerak dalam bidang pengelolaan sosial media, artikel dan berita.',
    tags: ['Pusat Informasi dan Kajian', 'Social Media'],
    jumlahRelawan: null,
    jamKerja: '',
    tanggalBerdiri: '',
    email: '',
    lokasi: '',
    noTelepon: '',
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 pt-16">
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-bold mb-4">Profile Organisasi</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 bg-white p-6 rounded-md shadow-lg relative">
            <div className="flex items-">
              <img src={iconorganisasi} alt="Logo Organisasi" className="w-20 h-20 rounded-md mr-6" />
              <div className="flex-1">
                {isEditing ? (
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={profile.name}
                      onChange={handleChange}
                      className="border p-2 rounded w-full mb-2"
                      placeholder="Nama Organisasi"
                    />
                    <textarea
                      name="description"
                      value={profile.description}
                      onChange={handleChange}
                      className="border p-2 rounded w-full mb-2"
                      placeholder="Deskripsi Organisasi"
                    />
                    <input
                      type="text"
                      name="tags"
                      value={profile.tags.join(', ')}
                      onChange={(e) =>
                        handleChange({
                          target: {
                            name: 'tags',
                            value: e.target.value.split(', '),
                          },
                        })
                      }
                      className="border p-2 rounded w-full mb-2"
                      placeholder="Tags (pisahkan dengan koma)"
                    />
                    <div className="flex items-center space-x-4 justify-around mt-4">
                      <div className="flex items-center">
                        <FaRegUser size={22} />
                        <input
                          type="number"
                          name="jumlahRelawan"
                          value={profile.jumlahRelawan}
                          onChange={handleChange}
                          className="border p-2 rounded w-full"
                          placeholder="Jumlah Relawan"
                        />
                      </div>
                      <div className="flex items-center">
                        <CiClock2 size={22} />
                        <input
                          type="text"
                          name="jamKerja"
                          value={profile.jamKerja}
                          onChange={handleChange}
                          className="border p-2 rounded w-full"
                          placeholder="Jam Kerja"
                        />
                      </div>
                      <div className="flex items-center">
                        <IoLayersOutline size={22} />
                        <input
                          type="text"
                          name="tanggalBerdiri"
                          value={profile.tanggalBerdiri}
                          onChange={handleChange}
                          className="border p-2 rounded w-full"
                          placeholder="Tanggal Berdiri"
                        />
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 justify-around mt-4" style={{ marginTop: '90px' }}>
                      <div className="flex items-center">
                        <TfiEmail size={22} />
                        <input
                          type="email"
                          name="email"
                          value={profile.email}
                          onChange={handleChange}
                          className="border p-2 rounded w-full"
                          placeholder="Email Organisasi"
                        />
                      </div>
                      <div className="flex items-center">
                        <TfiLocationPin size={22} />
                        <input
                          type="text"
                          name="lokasi"
                          value={profile.lokasi}
                          onChange={handleChange}
                          className="border p-2 rounded w-full"
                          placeholder="Lokasi"
                        />
                      </div>
                      <div className="flex items-center">
                        <IoCallOutline size={22} />
                        <input
                          type="tel"
                          name="noTelepon"
                          value={profile.noTelepon}
                          onChange={handleChange}
                          className="border p-2 rounded w-full"
                          placeholder="No. Telepon Organisasi"
                        />
                      </div>
                    </div>
                    <button onClick={handleSaveClick} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
                      Save
                    </button>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-l font-bold mb-2">{profile.name}</h3>
                    <p className="text-gray-600 text-sm font-extralight max-w-sm mb-4">{profile.description}</p>
                    <div className="flex items-center text-gray-600 mb-4 mt-4 text-sm space-x-4 pb-2">
                      {profile.tags.map((tag, index) => (
                        <div key={index}>{tag}</div>
                      ))}
                    </div>
                    <div className="border-b-2 mb-4"></div>
                    <div className="flex items-center space-x-4 justify-around mt-4">
                      <div className="flex items-center">
                        <FaRegUser size={22} />
                        <span className="ml-2 text-sm text-gray-600">Jumlah Relawan:</span>
                        <span className="ml-1 text-sm text-gray-600">{profile.jumlahRelawan}</span>
                      </div>
                      <div className="flex items-center">
                        <CiClock2 size={22} />
                        <span className="ml-2 text-sm text-gray-600">Jam Kerja:</span>
                        <span className="ml-1 text-sm text-gray-600">{profile.jamKerja}</span>
                      </div>
                      <div className="flex items-center">
                        <IoLayersOutline size={22} />
                        <span className="ml-2 text-sm text-gray-600">Tanggal Berdiri:</span>
                        <span className="ml-1 text-sm text-gray-600">{profile.tanggalBerdiri}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 justify-around mt-4" style={{ marginTop: '90px' }}>
                      <div className="flex items-center">
                        <TfiEmail size={22} />
                        <span className="ml-2 text-sm text-gray-600">Email Organisasi:</span>
                        <span className="ml-1 text-sm text-gray-600">{profile.email}</span>
                      </div>
                      <div className="flex items-center">
                        <TfiLocationPin size={22} />
                        <span className="ml-2 text-sm text-gray-600">Lokasi:</span>
                        <span className="ml-1 text-sm text-gray-600">{profile.lokasi}</span>
                      </div>
                      <div className="flex items-center">
                        <IoCallOutline size={22} />
                        <span className="ml-2 text-sm text-gray-600">No. Telepon Organisasi:</span>
                        <span className="ml-1 text-sm text-gray-600">{profile.noTelepon}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {!isEditing && (
              <button
                onClick={handleEditClick}
                className="absolute top-4 right-4 bg-[#0A65CC] text-white px-4 py-2 rounded-full"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileOrganization;
