import { useState } from 'react';
import API from '../api';

export default function Login({ onLogin }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', form);
      localStorage.setItem('token', res.data.token);
      onLogin(res.data.user);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="email" name="email" onChange={handleChange} placeholder="Email" className="w-full border p-2" required />
        <input type="password" name="password" onChange={handleChange} placeholder="Password" className="w-full border p-2" required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">Login</button>
      </form>
      {message && <p className="mt-3 text-center text-sm text-red-600">{message}</p>}
    </div>
  );
}
