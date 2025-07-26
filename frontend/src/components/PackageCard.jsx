import React from 'react';
import '../styles/Card.css'; 

const PackageCard = ({ pkg }) => {
  return (
    <div className="border rounded p-4 shadow hover:shadow-md transition">
      <h2 className="text-xl font-semibold mb-1">{pkg.title}</h2>
      <p className="text-gray-700"><strong>Destination:</strong> {pkg.destination}</p>
      <p><strong>Duration:</strong> {pkg.duration} days</p>
      <p><strong>Price:</strong> ${pkg.price}</p>
      <p className="my-2">{pkg.description}</p>
      <p><strong>Dates:</strong> {pkg.availableDates.join(', ')}</p>
      <button className="mt-2 bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700">
        Book Now
      </button>
    </div>
  );
};

export default PackageCard;
