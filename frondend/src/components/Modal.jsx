import React, { useState } from 'react';
import SuccessDaftar from '../components/SuccessDaftar';

const Modal = ({ show, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    alamat: '',
    noHp: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nama) newErrors.nama = 'Nama harus diisi';
    if (!formData.email) newErrors.email = 'Email harus diisi';
    if (!formData.alamat) newErrors.alamat = 'Alamat harus diisi';
    if (!formData.noHp) newErrors.noHp = 'No. HP harus diisi';
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      onSubmit(formData);
      setErrors({});
      setIsSubmitted(true);
    }
  };

  const handleModalClose = () => {
    onClose();
    setFormData({
      nama: '',
      email: '',
      alamat: '',
      noHp: '',
    });
  };

  const handleSuccessClose = () => {
    setIsSubmitted(false);
  };

  return (
    <>
      {show && !isSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg relative">
            <button
              onClick={handleModalClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              X
            </button>
            <h2 className="text-lg font-semibold mb-4">Daftar Mengikuti Proyek</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                {errors.nama && <p className="text-red-500 text-xs mb-1">{errors.nama}</p>}
                <input
                  type="text"
                  name="nama"
                  value={formData.nama}
                  onChange={handleInputChange}
                  placeholder="Nama"
                  className={`border rounded-lg p-2 w-full text-sm ${errors.nama ? 'border-red-500' : ''}`}
                />
              </div>

              <div className="mb-2">
                {errors.email && <p className="text-red-500 text-xs mb-1">{errors.email}</p>}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className={`border rounded-lg p-2 w-full text-sm ${errors.email ? 'border-red-500' : ''}`}
                />
              </div>

              <div className="mb-2">
                {errors.noHp && <p className="text-red-500 text-xs mb-1">{errors.noHp}</p>}
                <input
                  type="text"
                  name="noHp"
                  value={formData.noHp}
                  onChange={handleInputChange}
                  placeholder="No. HP"
                  className={`border rounded-lg p-2 w-full text-sm ${errors.noHp ? 'border-red-500' : ''}`}
                />
              </div>

              <div className="mb-2">
                {errors.alamat && <p className="text-red-500 text-xs mb-1">{errors.alamat}</p>}
                <textarea
                  name="alamat"
                  value={formData.alamat}
                  onChange={handleInputChange}
                  placeholder="Alamat"
                  className={`border rounded-lg p-2 w-full text-sm ${errors.alamat ? 'border-red-500' : ''}`}
                  rows="2"
                />
              </div>

              <div className="flex flex-col">
                <button
                  type="submit"
                  className="bg-[#0A65CC] font-bold text-white p-2 rounded-lg text-sm"
                >
                  Kirim Formulir Pendaftaran
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {isSubmitted && <SuccessDaftar onClose={handleSuccessClose} />}
    </>
  );
};

export default Modal;
