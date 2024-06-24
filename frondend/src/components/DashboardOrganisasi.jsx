import React, { useState } from 'react';
import { FaUserGroup, FaListCheck } from 'react-icons/fa6'; 
import { GrAnnounce } from 'react-icons/gr'; 

const DashboardOrganisasi = () => {
  const [relawanList, setRelawanList] = useState([
    { id: 1, nama: 'El Gasing', email: 'El.Gasing@example.com', noHp: '08123456789', alamat: 'Jl. Raya No. 123', status: 'Menunggu seleksi' },
    { id: 2, nama: 'El Template', email: 'El.Template@example.com', noHp: '087654321', alamat: 'Jl. Kembang No. 45', status: 'Menunggu seleksi' },
    { id: 3, nama: 'El Bolabali', email: 'El.Bolabali@example.com', noHp: '08987654321', alamat: 'Jl. Anggrek No. 78', status: 'Menunggu seleksi' },
    { id: 4, nama: 'El Mangrove', email: 'El.Mangrove@example.com', noHp: '08987654321', alamat: 'Jl. Anggrek No. 78', status: 'Menunggu seleksi' },
  ]);

  const [totalRelawanDiproses, setTotalRelawanDiproses] = useState(0);

  const handleTerimaRelawan = (id) => {
    const updatedRelawanList = relawanList.map(relawan => {
      if (relawan.id === id) {
        setTotalRelawanDiproses(prevCount => prevCount + 1);
        return { ...relawan, status: 'Diterima' };
      }
      return relawan;
    });
    setRelawanList(updatedRelawanList);
  };

  const handleTolakRelawan = (id) => {
    const updatedRelawanList = relawanList.map(relawan => {
      if (relawan.id === id) {
        setTotalRelawanDiproses(prevCount => prevCount + 1);
        return { ...relawan, status: 'Ditolak' };
      }
      return relawan;
    });
    setRelawanList(updatedRelawanList);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 pt-16">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-left text-gray-800 mb-8">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold mb-4">Relawan Baru</h2>
            <div className="flex items-center mb-4 m-5">
              <FaUserGroup className="w-20 h-16" color="#0A65CC" />
              <p className="text-4xl font-bold text-gray-500 ml-5">{relawanList.length}</p> 
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold mb-4">Seleksi Relawan</h2>
            <div className="flex items-center mb-4 m-5">
              <FaListCheck className="w-20 h-16" color="#0A65CC" />
              <p className="text-4xl font-bold text-gray-500 ml-5">{relawanList.filter(relawan => relawan.status === 'Menunggu seleksi').length}</p> 
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold mb-4">Briefing Relawan</h2>
            <div className="flex items-center mb-4 m-5">
              <GrAnnounce className="w-20 h-16" color="#0A65CC" />
              <p className="text-4xl font-bold text-gray-500 ml-5">{totalRelawanDiproses}</p> 
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Daftar Relawan</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-[#636364] text-white">
                <tr>
                  <th className="border px-4 py-2">Nama</th>
                  <th className="border px-4 py-2">Email</th>
                  <th className="border px-4 py-2">No. HP</th>
                  <th className="border px-4 py-2">Alamat</th>
                  <th className="border px-4 py-2">Status</th>
                  <th className="border px-4 py-2">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {relawanList.map(relawan => (
                  <tr key={relawan.id} className="text-black">
                    <td className="border px-4 py-2">{relawan.nama}</td>
                    <td className="border px-4 py-2">{relawan.email}</td>
                    <td className="border px-4 py-2">{relawan.noHp}</td>
                    <td className="border px-4 py-2">{relawan.alamat}</td>
                    <td className="border px-4 py-2">{relawan.status}</td>
                    <td className="border px-4 py-2">
                      {relawan.status === 'Menunggu seleksi' && (
                        <>
                          <button
                            onClick={() => handleTerimaRelawan(relawan.id)}
                            className="bg-[#0A65CC] text-white px-2 py-1 rounded-lg mr-2"
                          >
                            Terima
                          </button>
                          <button
                            onClick={() => handleTolakRelawan(relawan.id)}
                            className="bg-[#C20000] text-white px-2 py-1 rounded-lg"
                          >
                            Tolak
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOrganisasi;
