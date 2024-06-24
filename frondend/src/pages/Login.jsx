import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Email dan Password harus diisi');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      if (response.data.success) {
        const userRole = response.data.role; 
        onLogin(userRole); 
      } else {
        setError('Login gagal. Periksa email dan password Anda.');
      }
    } catch (error) {
      setError('Email atau password salah');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center ">
      <div className="w-full max-w-md p-14 ">
        <h2 className="mt-4 text-center text-2xl font-extrabold text-gray-900">
          Masuk
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm mb-4">
              {error}
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Ingat Saya
              </label>
            </div>

            <div className="text-sm">
              <Link to="/RequestPasswordReset" className="font-medium text-indigo-600 hover:text-indigo-500">
                Lupa Password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#0A65CC] hover:bg-[#0A65CC] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Masuk
            </button>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white font-semibold text-gray-700">
                ATAU
              </span>
            </div>
          </div>

          <div>
            <button
              type="button"
              className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <img
                  className="h-5 w-5"
                  src="https://www.svgrepo.com/show/355037/google.svg"
                  alt="Google"
                />
              </span>
              Sign in with Google
            </button>
          </div>

          <div className="text-center text-sm text-gray-600">
            Tidak punya akun?{' '}
            <Link to="/DaftarRelawan" className="font-medium text-[#0A65CC] hover:text-indigo-500">
              Daftar
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
