import {React, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Navbar = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <nav className="bg-white shadow-sm px-6 py-3 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl text-blue-600">Tourism App</Link>
      {user ? (
        <div className="flex gap-4 items-center">
          <span>Hello, {user.name}</span>
          <Link to="/profile" className="mr-4 hover:underline">Profile</Link>
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