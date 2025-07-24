
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PackageCard from '../components/PackageCard.jsx';

const Home = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/packages')
      .then(res => setPackages(res.data))
      .catch(err => console.error('Error fetching packages:', err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Available Tour Packages</h1>
      {packages.length > 0 ? (
        packages.map(pkg => (
          <PackageCard key={pkg._id} pkg={pkg} />
        ))
      ) : (
        <p>No packages available.</p>
      )}
    </div>
  );
};

export default Home;
