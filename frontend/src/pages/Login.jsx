import { useState,useContext  } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';
import { UserContext } from '../context/UserContext';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', form);
      login(res.data.user, res.data.token);
      navigate('/'); // Redirect to home after login
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

export default Login;
