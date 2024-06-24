import React from "react";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";

const Blog = () => {
    return (
        <div className="pt-8 lg:pt-20 px-4 lg:px-16 mb-6">
            <h1 className="font-bold text-3xl text-center mb-8">Blog</h1>
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between lg:space-x-6">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full lg:w-80 m-2 lg:mb-0 lg:mr-2">
                    <img src={blog1} alt="Blog 1" className="w-full h-auto object-cover"/>
                    <div className="p-4">
                        <h2 className="font-bold text-xl mb-2">Kolaborasi Baik</h2>
                        <p className="text-gray-600">Berkolaborasi lah dengan relawan lain agar bisa bertukar pikiran, ide dan pendapat.</p>
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full lg:w-80 m-2 lg:mb-0 lg:mx-2">
                    <img src={blog2} alt="Blog 2" className="w-full h-auto object-cover"/>
                    <div className="p-4">
                        <h2 className="font-bold text-xl mb-2">Kesempatan Luas</h2>
                        <p className="text-gray-600">Banyak kesempatan bagi kita semua untuk saling membantu orang diluar sana yang membutuhkan kita.</p>
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full lg:w-80 m-2 lg:mb-0 lg:ml-2">
                    <img src={blog3} alt="Blog 3" className="w-full h-auto object-cover"/>
                    <div className="p-4">
                        <h2 className="font-bold text-xl mb-2">Keterampilan Unik</h2>
                        <p className="text-gray-600">Membuat keterampilan yang unik sebagai relawan agar dapat menghibur orang lain</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
