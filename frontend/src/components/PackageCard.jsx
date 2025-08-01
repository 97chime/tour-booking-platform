import React from 'react';
import '../styles/Card.css'; 

const PackageCard = ({ pkg }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src="/sample-tour.jpg" alt="Tour" className="w-full h-48 object-cover" />

      <div className="p-4">
        <h3 className="text-xl font-bold">{pkg.title}</h3>
        <p className="text-gray-600 mt-2">{pkg.destination}</p>
        <p className="text-gray-600">{pkg.duration} days</p>
        <p className="text-gray-600 mt-2">{pkg.description}</p>
        <p className="text-blue-600 font-bold mt-3">RM {pkg.price}</p>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default PackageCard;
