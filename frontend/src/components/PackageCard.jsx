
import React from 'react';
import '../styles/Card.css'; 

const PackageCard = ({ pkg }) => {
  return (
    <div className="package-card">
      <h2>{pkg.title}</h2>
      <p><strong>Destination:</strong> {pkg.destination}</p>
      <p><strong>Duration:</strong> {pkg.duration} days</p>
      <p><strong>Price:</strong> ${pkg.price}</p>
      <p>{pkg.description}</p>
      <p><strong>Dates:</strong> {pkg.availableDates.join(', ')}</p>
      <button>Book Now</button>
    </div>
  );
};

export default PackageCard;
