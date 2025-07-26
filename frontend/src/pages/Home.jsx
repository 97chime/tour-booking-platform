
import React, { useEffect, useState } from 'react';
import PackageCard from '../components/PackageCard';
import API from '../api';

const Home = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    async function fetchPackages() {
      const res = await API.get('/packages'); // Make sure you have this route
      setPackages(res.data);
    }
    fetchPackages();
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
