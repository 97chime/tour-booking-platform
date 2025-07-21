import { useState } from 'react';
import API from '../api';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/register', form);
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="text" name="name" onChange={handleChange} placeholder="Name" className="w-full border p-2" required />
        <input type="email" name="email" onChange={handleChange} placeholder="Email" className="w-full border p-2" required />
        <input type="password" name="password" onChange={handleChange} placeholder="Password" className="w-full border p-2" required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">Register</button>
      </form>
      {message && <p className="mt-3 text-center text-sm text-green-700">{message}</p>}
    </div>
  );
}
