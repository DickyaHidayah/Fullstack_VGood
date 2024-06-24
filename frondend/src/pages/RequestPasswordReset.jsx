import React, { useState } from 'react';
import axios from 'axios';

const RequestPasswordReset = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/request-reset-password', { email });
      setMessage(response.data.message);
      setError('');
    } catch (error) {
      setError('Request failed');
      setMessage('');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg max-w-md w-full">
        <h2 className="text-xl text-center mb-6">Reset Password</h2>
        {message && <p className="text-green-500 text-center">{message}</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email <span className="text-red-500">*</span></label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestPasswordReset;
