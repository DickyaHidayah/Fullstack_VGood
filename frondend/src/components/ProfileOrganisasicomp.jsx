import React from 'react';
import iconorganisasi from '../assets/iconorganisasi.png';
import iconuser from '../assets/iconuser.png';
import kegiatan4 from '../assets/kegiatan4.png';
import sertifikat from '../assets/sertifikat.png';

const ProfileOrganisasicomp = () => {
  const relawanList = [
    { name: 'Yusuf NurQolbi', image: iconuser },
    { name: 'Yudha Abdullah', image: iconuser },
    { name: 'Arya Witaro', image: iconuser }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8 pt-16">
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          <div className="flex-1 bg-white p-6 rounded-md shadow-lg">
            <div className="flex items-center">
              <img src={iconorganisasi} alt="Logo Organisasi" className="w-20 h-20 rounded-md mr-6" />
              <div>
                <h3 className="text-l font-bold">Yayasan Hutan, Alam dan Lingkungan Aceh</h3>
                <p className="text-gray-600 text-sm font-thin max-w-s">Our name is an Indonesian abbreviation for Hutan, Alam, dan Lingkungan Aceh. We are an Aceh based non-profit organization working to protect the Leuser Ecosystem, the last place on earth where rhinos, elephants, tigers, and orangutans still roam together in the wild. At HAkA we have a strong believe that policy advocacy is as much as important as the regular protection on the ground.

The Leuser Ecosystem has been on the list of UNESCO World Heritage site for its rich of biodiversity and high carbon stock. Research shows that dense rainforest of the Leuser carry environmental functions that is important for people to survive (e.g. clean water, clean air). Our approaches emphasize on encouraging good policy and empowering civil society, particularly grassroot community, to act to enhance environment for the long term health of Aceh Province - socially, financially, and environmentally.</p>
                <div className="flex items-center text-gray-600 mb-4 mt-4 ml-10 text-sm space-x-4">
                <div>Edukasi</div>
              </div>

              </div>
            </div>
            
            
          </div>

         
          <div className="lg:flex-shrink-0 lg:w-64 bg-white p-6 rounded-md shadow-lg">
            <h4 className="text-lg font-bold mb-4">Relawan</h4>
            <div className="space-y-4">
              {relawanList.map((relawan, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <img src={relawan.image} alt={relawan.name} className="w-12 h-12 rounded-full" />
                  <p className="text-gray-800">{relawan.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        
        <div className="mt-8 bg-white p-6 rounded-md shadow-lg">
          <h4 className="text-lg font-bold mb-4">Aktivitas Proyek</h4>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <img src={kegiatan4} alt="Proyek" className="w-20 h-20 rounded-md" />
              <div>
                <h5 className="text-l font-bold">Mengajarkan Bahasa Inggris</h5>
                <p className="text-gray-400">Status: Terbuka sampai 12 Mei 2024</p>
                <p className="text-gray-800 mt-3">Pueblo Ingles adalah program pengajaran bahasa Inggris sukarelawan yang luar biasa di Eropa untuk semua penutur asli bahasa Inggris yang ingin menghabiskan seminggu di luar negeri menikmati budaya, percakapan, dan berhubungan dengan orang-orang. Anda akan memiliki kesempatan untuk mengenal sekelompok individu yang berbeda dari semua lapisan masyarakat.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-white p-6 rounded-md shadow-lg">
          <h4 className="text-lg font-bold mb-4">Benefit</h4>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <img src={sertifikat} alt="Proyek" className="w-20 h-20 rounded-md" />
              <div>
                <h5 className="text-l font-bold">Sertifikat</h5>
                <p className="text-gray-400">Status: Terbuka sampai 12 Mei 2024</p>
                <p className="text-gray-800 mt-3">Sertifikat Internasional organisasi relawan Yayasan Hutan, Alam dan Lingkungan Aceh menawarkan sertifikat internasional yang diakui, yang dapat memperkuat resume Anda dan meningkatkan daya saing di pasar kerja global.</p>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default ProfileOrganisasicomp;
