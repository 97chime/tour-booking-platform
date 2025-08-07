import { useState, useContext  } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';
import { UserContext } from '../context/UserContext';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const { login, user } = useContext(UserContext);
  const navigate = useNavigate();

  if (user) navigate('/profile'); // Redirect if already logged in

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', form);
      login(res.data.user, res.data.accessToken, res.data.refreshToken);
      navigate('/'); // Redirect to home after login
    } catch (err) {
      setMessage(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="email" 
          name="email" 
          onChange={handleChange} 
          placeholder="Email" 
          className="w-full border border-gray-300 rounded px-3 py-2"
          required 
        />
        <input 
          type="password" 
          name="password" 
          onChange={handleChange} 
          placeholder="Password" 
          className="w-full border border-gray-300 rounded px-3 py-2"
          required 
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
      {message && <p className="mt-3 text-center text-sm text-red-600">{message}</p>}
    </div>
  );
}
