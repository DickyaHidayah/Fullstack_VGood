import React from "react";
import { Link } from "react-router-dom";
import kegiatan1 from "../assets/kegiatan1.png";
import kegiatan2 from "../assets/kegiatan2.png";
import kegiatan3 from "../assets/kegiatan3.png";
import kegiatan4 from "../assets/kegiatan4.png";

const Kegiatan = () => {
    return (
        <div className="pt-8 lg:pt-32 px-4 lg:px-16">
            <h1 className="font-bold text-3xl text-center">Kegiatan Proyek Sedang Berlangsung</h1>
            <p className="text-center text-base mt-4 text-gray-600 lg:max-w-3xl mx-auto">
                Pilih proyek kerelawanan sesuai minat, kemampuan, dan lokasi yang kamu suka.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-between gap-6 lg:gap-8 mt-8">
                <div className="bg-white shadow-xl hover:shadow-xl rounded-lg overflow-hidden w-full lg:w-60 m-2 lg:m-0">
                    <Link to="/">
                        <img src={kegiatan1} alt="Gambar 1" className="w-full h-40 object-cover" />
                    </Link>
                    <div className="p-4">
                        <h2 className="font-bold text-base">Membantu Proyek Konstruksi peduli iklim</h2>
                        <p className="text-gray-600">Go-Overseas</p>
                    </div>
                </div>
                <div className="bg-white shadow-xl hover:shadow-xl rounded-lg overflow-hidden w-full lg:w-60 m-2 lg:m-0">
                    <img src={kegiatan2} alt="Gambar 2" className="w-full h-40 object-cover" />
                    <div className="p-4">
                        <h2 className="font-bold text-base">Membantu Peternakan Ayam</h2>
                        <p className="text-gray-600">MDI</p>
                    </div>
                </div>
                <div className="bg-white shadow-xl hover:shadow-xl rounded-lg overflow-hidden w-full lg:w-60 m-2 lg:m-0">
                    <img src={kegiatan3} alt="Gambar 3" className="w-full h-40 object-cover" />
                    <div className="p-4">
                        <h2 className="font-bold text-base">Memberikan perawatan gigi</h2>
                        <p className="text-gray-600">DAYA.ID</p>
                    </div>
                </div>
                <div className="bg-white shadow-xl hover:shadow-xl rounded-lg overflow-hidden w-full lg:w-60 m-2 lg:m-0">
                    <img src={kegiatan4} alt="Gambar 4" className="w-full h-40 object-cover" />
                    <div className="p-4">
                        <h2 className="font-bold text-base">Mengajarkan Bahasa Inggris</h2>
                        <p className="text-gray-600">KayaVolunteers</p>
                    </div>
                </div>
            </div>
            <div className="pt-10 text-center">
                <Link to="/Login" className="text-base underline" style={{ color: '#0A65CC' }}>Lihat Proyek Lainnya</Link>
            </div>
        </div>
    );
};

export default Kegiatan;
