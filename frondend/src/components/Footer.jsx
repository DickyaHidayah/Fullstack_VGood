import React from 'react';

const Footer = () => {
  return (
    <footer className="p-8 mt-8 bg-[#0A65CC] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
         
          <div className="space-y-4">
            <p className="text-lg font-bold">Volunteers Good.</p>
            <p className="text-base font-thin mt-2">Jl. Dr. Setia Budhi No. 125 Bandung Barat</p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold">Informasi</h4>
            <ul>
              <li>Tentang Kami</li>
              <li>Kontak Kami</li>
              <li>Tanggapan Orang lain</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold">Tautan</h4>
            <ul>
              <li>Beranda</li>
              <li>Donasi</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
       
        <div className="mt-6 text-left text-sm font-light">
          <p>Copyright © Volunteers Good 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

