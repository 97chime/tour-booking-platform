
import React, { useEffect, useState } from 'react';
import TourCard from '../components/TourCard.jsx';
import API from '../api';

const Home = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    async function fetchTours() {
      const res = await API.get('/tours'); 
      setTours(res.data);
    }
    fetchTours();
  }, []);

  return (
    <div>
      <h1>Available Tour Packages</h1>
      {tours.length > 0 ? (
        tours.map(tour => (
          <TourCard key={tour._id} tour={tour} />
        ))
      ) : (
        <p>No packages available.</p>
      )}
    </div>
  );
};

export default Home;
