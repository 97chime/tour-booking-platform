import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [backendStatus, setBackendStatus] = useState('Connecting...');

  useEffect(() => {
    axios.get('http://localhost:5000/api/test')
      .then(res => {
        if (res.data && res.data.message) {
          setBackendStatus(res.data.message);
        } else {
          setBackendStatus('Backend Error');
        }
      })
      .catch(() => setBackendStatus('Backend Error'));
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600">{backendStatus}</h1>
    </div>
  );
}

export default App;