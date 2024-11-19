import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import MainPage from './MainPage';
import Footer from './Components/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import './App.css'; 

const App = () => {
  return (
    <>
      <Routes>
        {/* Rute untuk Home */}
        <Route path="/" element={<Home />} />
        {/* Rute untuk MainPage */}
        <Route path="/main" element={<MainPage />} />
      </Routes>
      <Footer />
      <span className="toaste">
        <Toaster position="top-center" reverseOrder={false} />
      </span>
    </>
  );
};

export default App;