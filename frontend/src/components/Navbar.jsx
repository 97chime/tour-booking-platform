import {React, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Navbar = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">TourismApp</Link>
      {user ? (
        <div className="flex gap-4 items-center">
          <span>Hello, {user.name}</span>
          <button onClick={logout} className="text-sm text-red-400 hover:underline">Logout</button>
        </div>
      ) : (
        <div className="flex gap-4">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;