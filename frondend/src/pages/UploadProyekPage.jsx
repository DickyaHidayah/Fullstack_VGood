import React from 'react';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import UploadProyekForm from '../components/UploadProyekForm';

const UploadProyekPage = () => {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center bg-gray-100 py-8">
        <div className="w-full max-w-4xl">
          <UploadProyekForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UploadProyekPage;
