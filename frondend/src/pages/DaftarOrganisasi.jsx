import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Bs1Circle, Bs2Circle, Bs3Circle } from 'react-icons/bs';
import axios from 'axios';
import google from '../assets/google.png';
import { Link } from 'react-router-dom';

const DaftarOrganisasi = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    organizationName: '',
    establishmentDate: '',
    description: '',
    logo: null, 
    location: '',
    organizationEmail: '',
    organizationPhone: '',
    website: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, logo: e.target.files[0] }); 
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Password dan konfirmasi password tidak cocok');
      return;
    }

    if (formData.password.length < 8) {
      setError('Password harus terdiri dari minimal 8 karakter');
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('password', formData.password);
      formDataToSend.append('organizationName', formData.organizationName);
      formDataToSend.append('establishmentDate', formData.establishmentDate);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('logo', formData.logo); // Include logo in FormData
      formDataToSend.append('location', formData.location);
      formDataToSend.append('organizationEmail', formData.organizationEmail);
      formDataToSend.append('organizationPhone', formData.organizationPhone);
      formDataToSend.append('website', formData.website);

      const response = await axios.post('http://localhost:5000/api/auth/register', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.data.success) {
        // Save organization ID or logo URL in localStorage/sessionStorage for ProfileOrganization
        localStorage.setItem('organizationLogoUrl', response.data.logoUrl); // Example: saving logo URL
        navigate('/success');
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError('Registrasi gagal');
    }
  };

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg max-w-md w-full">
        <h2 className="text-xl text-center mb-6">Buat Akun Organisasi</h2>
        
        <div className="relative mb-10">
          <div className="flex items-center justify-center ">
            <div className="text-center justify-between  flex items-center w-full max-w-lg">
              <div className="flex flex-col ">
                <span className="text-xs font-extralight mb-2">Nirla Hubung</span>
                <Bs1Circle className={`text-3xl text-white ${step >= 1 ? 'bg-[#0A65CC]' : 'bg-[#b3b0b0]'} rounded-full`} />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs font-extralight mb-2">Buat Akun Organisasi</span>
                <Bs2Circle className={`text-3xl text-white ${step >= 2 ? 'bg-[#0A65CC]' : 'bg-[#b3b0b0]'} rounded-full`} />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs font-extralight mb-2">Informasi Kontak</span>
                <Bs3Circle className={`text-3xl text-white ${step === 3 ? 'bg-[#0A65CC]' : 'bg-[#b3b0b0]'} rounded-full`} />
              </div>
            </div>
          </div>
        </div>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form className="space-y-4" onSubmit={handleSubmit}>
          {step === 1 && (
            <>
              <div>
                <label className="block text-sm mb-1">
                  Nama Perwakilan <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Masukan Nama Perwakilan"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="perwakilan@gmail.com"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-1">No. HP</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="085676765241"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div className="relative">
                <label className="block text-sm mb-1">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center border rounded-lg px-4 py-2">
                  <input
                    type={passwordVisible ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Minimal 8 Karakter"
                    className="w-full focus:outline-none"
                    required
                  />
                  <button
                    type="button"
                    className="ml-2 text-gray-500 flex items-center justify-center"
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              <div className="relative">
                <label className="block text-sm mb-1">
                  Konfirmasi Password <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center border rounded-lg px-4 py-2">
                  <input
                    type={confirmPasswordVisible ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Minimal 8 Karakter"
                    className="w-full focus:outline-none"
                    required
                  />
                  <button
                    type="button"
                    className="ml-2 text-gray-500 flex items-center justify-center"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  disabled={step === 1}
                  className="py-2 px-4  text-[#0A65CC] border-4 rounded-full hover:bg-gray-500 transition-colors"
                >
                  Sebelumnya
                </button>
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="py-2 px-4 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors"
                >
                  Selanjutnya
                </button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div>
                <label className="block text-sm mb-1">
                  Nama Organisasi <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleChange}
                  placeholder="Masukan Nama Organisasi"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-1">
                  Tanggal Berdiri <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="establishmentDate"
                  value={formData.establishmentDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-1">
                  Deskripsi <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Deskripsi Organisasi"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-1">
                  Logo Organisasi <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  name="logo"
                  onChange={handleFileChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="py-2 px-4  text-[#0A65CC] border-4 rounded-full hover:bg-gray-500 transition-colors"
                >
                  Sebelumnya
                </button>
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="py-2 px-4 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors"
                >
                  Selanjutnya
                </button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div>
                <label className="block text-sm mb-1">
                  Lokasi Organisasi <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Masukan Lokasi Organisasi"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-1">
                  Email Organisasi <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="organizationEmail"
                  value={formData.organizationEmail}
                  onChange={handleChange}
                  placeholder="organisasi@example.com"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-1">
                  No. HP Organisasi <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="organizationPhone"
                  value={formData.organizationPhone}
                  onChange={handleChange}
                  placeholder="085676765242"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-1">
                  Website Organisasi <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://example.com"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  required
                />
                <span>Saya menyetujui semua syarat & ketentuan</span>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors"
              >
                Buat Akun
              </button>
            </>
          )}
        </form>

        {step !== 3 && (
          <>
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#666666]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white font-semibold text-gray-700">
                  ATAU
                </span>
              </div>
            </div>

            <button
              className="w-full py-2 px-4 border border-gray-300 text-black rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-100 transition-colors"
            >
              <img src={google} alt="Google" className="w-5 h-5" />
              <span>Masuk menggunakan Google</span>
            </button>
          </>
        )}

        <div className="text-center mt-4">
          Sudah punya akun? <Link to="/Login" className="text-blue-700">Masuk</Link>
        </div>
      </div>
    </div>
  );
};

export default DaftarOrganisasi;
