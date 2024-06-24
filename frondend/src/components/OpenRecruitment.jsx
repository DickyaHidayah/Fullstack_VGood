import React from 'react';

const OpenRecruitment = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h3 className="text-xl font-bold mb-2">Open Recruitment: Mari Bergabung Jadi Tim Kami</h3>
      <div className="mb-4">
        <button className="bg-blue-500 text-white p-2 rounded-lg mr-2">Proyek</button>
        <button className="bg-blue-500 text-white p-2 rounded-lg mr-2">Pendidikan</button>
        <button className="bg-blue-500 text-white p-2 rounded-lg">Pengembangan Anak Muda</button>
      </div>
      <div className="mb-4">
        <h4 className="font-semibold">Periode Proyek:</h4>
        <p>16 Mei - 25 Mei</p>
      </div>
      <div className="mb-4">
        <h4 className="font-semibold">Lokasi:</h4>
        <p>Inspiration Factory Foundation Citywalk Sudirman, GF Jalan K.H. Mas Mansyur No.121 Karet Tengsin, Kec. Tanah Abang, Kota Jakarta Pusat</p>
      </div>
      <div className="mb-4">
        <h4 className="font-semibold">Waktu:</h4>
        <p>09:00 - Selesai</p>
      </div>
      <div className="flex space-x-4">
        <button className="bg-green-500 text-white p-2 rounded-lg">Daftar Relawan</button>
        <button className="bg-gray-500 text-white p-2 rounded-lg">Kontak Organisasi</button>
      </div>
    </div>
  );
};

export default OpenRecruitment;
