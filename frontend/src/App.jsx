import { useState } from 'react';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="p-4">
      {user ? (
        <h1 className="text-2xl font-bold text-green-700">Welcome, {user.name}!</h1>
      ) : (
        <>
          <Register />
          <div className="my-6 border-t pt-6" />
          <Login onLogin={setUser} />
        </>
      )}
    </div>
  );
}

export default App;
