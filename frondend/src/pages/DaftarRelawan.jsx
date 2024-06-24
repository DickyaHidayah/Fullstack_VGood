import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import google from '../assets/google.png';
import { Link } from 'react-router-dom';

const DaftarRelawan = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      const response = await axios.post('http://localhost:5000/api/auth/register', formData);
      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        navigate('/success');
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError('Registrasi gagal');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg max-w-md w-full">
        <h2 className="text-xl text-center mb-6">Buat Akun Relawan</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm mb-1">
              Nama <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Masukan Nama Relawan"
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
              placeholder="relawan@gmail.com"
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
        </form>
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
        <div className="text-center mt-4">
          Sudah punya akun? <Link to="/Login" className="text-blue-700">Masuk</Link>
        </div>
      </div>
    </div>
  );
};

export default DaftarRelawan;
