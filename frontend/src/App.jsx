import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Profile from './pages/Profile.jsx';
import TourDetails from './pages/TourDetails.jsx';

const App = () => {
  return (
        <Router>
          <div className="min-h-screen max-w-full bg-gray-50 text-gray-800">
          <Navbar />
          <main className="max-w-4xl mx-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
              <Route path="/tours/:id" element={<TourDetails />} />
            </Routes>
          </main>
          </div>
        </Router>
  );
};

export default App;
