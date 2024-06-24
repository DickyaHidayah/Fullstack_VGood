import React from 'react';
import blog3 from '../assets/blog3.png';

const Donasicomp = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-grow flex flex-col items-center justify-center pt-20 px-4 lg:px-16">
        
        <div className="bg-white rounded-xl shadow-xl flex flex-col items-start p-6 md:p-8 mb-10 w-full md:w-4/5 lg:w-3/4">
          <h2 className="text-2xl font-bold mb-8 text-left w-full">Donasi</h2>
          <img
            src={blog3}
            alt="Donasi"
            className="rounded-lg mb-4 w-full"
            style={{ width: '1090px', height: '502px' }}
          />
          <p className="mb-4 w-full text-left text-light text-gray-600">
            Harta tidak akan berkurang dengan sedekah. Dan seorang hamba yang pemaaf pasti akan Allah tambahkan kewibawaan baginya" (HR. Muslim).
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl flex flex-col items-center text-center p-6 md:p-8 mb-10 w-full md:w-4/5 lg:w-3/4">
          <p className="mb-4 w-full text-left text-light text-gray-600">
            Volunteers Good menghubungkan organisasi nirlaba dengan relawan melalui sumbangan donatur individu, mendukung ribuan organisasi nirlaba dengan layanan gratis, termasuk mengajar anak-anak putus sekolah, melindungi lingkungan, dan mendukung hak asasi manusia.
          </p>
          <h3 className="mb-4 w-full text-left text-light text-black font-semibold">Mengapa Kami Membutuhkan Dukunganmu?</h3>
          <p className="mb-4 w-full text-left text-light text-gray-600">
            Donasi yang Anda berikan sangat penting bagi operasional VolunteersGood. Dengan dukungan Anda, kami dapat menyediakan platform secara gratis, memungkinkan organisasi nirlaba dan relawan untuk terhubung, berkolaborasi, dan menjalankan misi kemanusiaan mereka. Kontribusi Anda memainkan peran utama dalam membangun jembatan antara mereka yang ingin membantu dan mereka yang membutuhkan bantuan, menciptakan ekosistem solid untuk perubahan positif.
          </p>
          <p className="mb-4 w-full text-left text-light text-black">Donasi kamu sangat berarti dan memberikan dampak positif yang besar.</p>
          <h3 className="mb-4 w-full text-left text-light text-black font-semibold">Donasi dapat dikirim melalui:</h3>
          <ul className="list-disc list-inside mb-4 w-full text-left">
            <li>BCA - 6556566555465 (Yusuf Maulana)</li>
            <li>Mandiri - 7766611167676 (Muhammad Iqbal)</li>
            <li>BRI - 12345677876434 (Javier Jasha)</li>
          </ul>
          <h3 className="w-full text-left text-light text-black font-semibold">Kontak:</h3>
          <p className="w-full text-left">Maulana Sidiq - 0813223434343</p>
          <p className="w-full text-left">Wildan Arif Firmansyah - 085672354621</p>
        </div>
      </div>
    </div>
  );
};

export default Donasicomp;
