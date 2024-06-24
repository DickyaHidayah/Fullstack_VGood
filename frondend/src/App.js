import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Landingpage from './pages/Landingpage';
import DaftarRelawan from './pages/DaftarRelawan';
import DaftarOrganisasi from './pages/DaftarOrganisasi';
import Tentangkami from './pages/Tentangkami';
import Lprelawan from './pages/Lprelawan';
import Lporganisasi from './pages/Lporganisasi';
import Donasi from './pages/Donasi';
import Donate from './pages/Donate';
import Dashboardrelawan from './pages/Dashboardrelawan';
import DashboardOrganisasi from './pages/DashboardOrganisasi';
import ProfileRelawan from './pages/ProfileRelawan';
import ProfileOrganisasi from './pages/ProfileOrganisasi';
import InfoOrganisasi from './pages/InfoOrganisasi';
import CariOrganisasi from './pages/CariOrganisasi';
import CariRelawan from './pages/CariRelawan';
import CariProyek from './pages/CariProyek';
import Success from './components/Success';
import RequestPasswordReset from './pages/RequestPasswordReset';
import ResetPassword from './pages/ResetPassword';
import DetailProyek from './components/DetailProyek';
import UploadProyekPage from './pages/UploadProyekPage';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/Tentangkami" element={<Tentangkami />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/DaftarRelawan" element={<DaftarRelawan />} />
        <Route path="/DaftarOrganisasi" element={<DaftarOrganisasi />} />
        <Route path="/RequestPasswordReset" element={<RequestPasswordReset />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/Lprelawan" element={<Lprelawan />} />
        <Route path="/Lporganisasi" element={<Lporganisasi />} />
        <Route path="/Donasi" element={<Donasi />} />
        <Route path="/Donate" element={<Donate />} />
        <Route path="/Dashboardrelawan" element={<Dashboardrelawan />} />
        <Route path="/DashboardOrganisasi" element={<DashboardOrganisasi />} />
        <Route path="/ProfileRelawan" element={<ProfileRelawan />} />
        <Route path="/ProfileOrganisasi" element={<ProfileOrganisasi />} />
        <Route path="/InfoOrganisasi" element={<InfoOrganisasi />} />
        <Route path="/CariProyek" element={<CariProyek />} />
        <Route path="/DetailProyek" element={<DetailProyek />} />
        <Route path="/CariOrganisasi" element={<CariOrganisasi />} />
        <Route path="/CariRelawan" element={<CariRelawan />} />
        <Route path="/success" element={<Success />} />
        <Route path="/UploadProyekPage" element={<UploadProyekPage />} />

      </Routes>
    </div>
  );
};

export default App;
