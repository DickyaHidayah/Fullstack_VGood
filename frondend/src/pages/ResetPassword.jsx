import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';

const ResetPassword = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
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
      const response = await axios.post('http://localhost:5000/api/auth/reset-password', {
        password: formData.password
      });

      if (response.data.success) {
        setMessage('Password berhasil direset. Anda akan diarahkan ke halaman login.');
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError('Reset password gagal');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg max-w-md w-full">
        <h2 className="text-xl text-center mb-6">Reset Password</h2>

        <p className="text-left mb-4 text-xs">Create a new password. Ensure it differs from previous ones for security.</p>

        {error && <p className="text-red-500 text-center">{error}</p>}
        {message && <p className="text-green-500 text-center">{message}</p>}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="relative">
            <label className="block text-sm mb-1">
              Password Baru <span className="text-red-500">*</span>
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
              Konfirmasi Password Baru <span className="text-red-500">*</span>
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
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
