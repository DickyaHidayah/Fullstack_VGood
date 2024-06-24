import React, { useState, useEffect } from 'react';
import axios from 'axios';
import iconuser from '../assets/iconuser.png';

const Profile = () => {
    const [profileData, setProfileData] = useState({
        name: "",
        phone: "",
        email: "",
        city: "",
        bio: "",
        country: "",
        province: "",
        postalCode: "",
        address: ""
    });
    const [isLoading, setIsLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setEditedData] = useState(profileData);

    useEffect(() => {
        
        axios.get('/api/profile')
            .then(response => {
                setProfileData(response.data);
                setEditedData(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching profile data:', error);
                setIsLoading(false);
            });
    }, []);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsLoading(true);
        
        axios.put('/api/profile', editedData)
            .then(response => {
                setProfileData(response.data);
                setIsEditing(false);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error saving profile data:', error);
                setIsLoading(false);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedData({ ...editedData, [name]: value });
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8 pt-16">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-left text-gray-800 mb-8">Profile</h1>
                <div className="bg-white shadow rounded-lg p-6 mb-6">
                    <div className="flex items-center">
                        <img src={iconuser} alt="Profile" className="w-24 h-24 rounded-full mr-4" />
                        <div>
                            <h2 className="text-xl font-bold">{profileData.name}</h2>
                            <p className="text-gray-600">{profileData.email}</p>
                            <p className="text-gray-600">{profileData.city}</p>
                        </div>
                        {!isEditing ? (
                            <button className="ml-auto bg-blue-500 text-white px-4 py-2 rounded" onClick={handleEditClick}>
                                Edit
                            </button>
                        ) : (
                            <button className="ml-auto bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSaveClick}>
                                Save
                            </button>
                        )}
                    </div>
                </div>

                {isEditing ? (
                    <div className="bg-white shadow rounded-lg p-6 mb-6">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-bold">Edit Informasi Pribadi</h3>
                        </div>
                        <div className="mt-4 grid grid-cols-2 gap-4">
                            <div>
                                <label className="font-semibold">Nama</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={editedData.name}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div>
                                <label className="font-semibold">No. Telepon</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={editedData.phone}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div>
                                <label className="font-semibold">Alamat Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={editedData.email}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div className="col-span-2">
                                <label className="font-semibold">Bio</label>
                                <textarea
                                    name="bio"
                                    value={editedData.bio}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white shadow rounded-lg p-6 mb-6">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-bold">Informasi Pribadi</h3>
                        </div>
                        <div className="mt-4 grid grid-cols-2 gap-4">
                            <div>
                                <p className="font-semibold">Nama</p>
                                <p>{profileData.name}</p>
                            </div>
                            <div>
                                <p className="font-semibold">No. Telepon</p>
                                <p>{profileData.phone}</p>
                            </div>
                            <div>
                                <p className="font-semibold">Alamat Email</p>
                                <p>{profileData.email}</p>
                            </div>
                            <div className="col-span-2">
                                <p className="font-semibold">Bio</p>
                                <p>{profileData.bio}</p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="bg-white shadow rounded-lg p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold">Detail Alamat</h3>
                    </div>
                    {isEditing ? (
                        <div className="grid grid-cols-2 gap-y-2 gap-x-8">
                            <div>
                                <label className="font-semibold">Negara</label>
                                <input
                                    type="text"
                                    name="country"
                                    value={editedData.country}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div>
                                <label className="font-semibold">Provinsi</label>
                                <input
                                    type="text"
                                    name="province"
                                    value={editedData.province}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div>
                                <label className="font-semibold">Kode Pos</label>
                                <input
                                    type="text"
                                    name="postalCode"
                                    value={editedData.postalCode}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div>
                                <label className="font-semibold">Kota</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={editedData.city}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div className="col-span-2">
                                <label className="font-semibold">Alamat Rumah</label>
                                <textarea
                                    name="address"
                                    value={editedData.address}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 gap-y-2 gap-x-8">
                            <div>
                                <p className="font-semibold">Negara</p>
                                <p className="text-gray-500">{profileData.country}</p>
                            </div>
                            <div>
                                <p className="font-semibold">Provinsi</p>
                                <p className="text-gray-500">{profileData.province}</p>
                            </div>
                            <div>
                                <p className="font-semibold">Kode Pos</p>
                                <p className="text-gray-500">{profileData.postalCode}</p>
                            </div>
                            <div>
                                <p className="font-semibold">Kota</p>
                                <p className="text-gray-500">{profileData.city}</p>
                            </div>
                            <div className="col-span-2">
                                <p className="font-semibold">Alamat Rumah</p>
                                <p className="text-gray-500">{profileData.address}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
