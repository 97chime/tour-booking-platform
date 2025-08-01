import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Card.css'; 

const TourCard = ({ tour }) => {
  return (
  <Link to={`/tours/${tour._id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="/sample-tour.jpg" alt="Tour" className="w-full h-48 object-cover" />

        <div className="p-4">
          <h3 className="text-xl font-bold">{tour.title}</h3>
          <p className="text-gray-600 mt-2">{tour.destination}</p>
          <p className="text-gray-600">{tour.duration} days</p>
          <p className="text-gray-600 mt-2">{tour.description}</p>
          <p className="text-blue-600 font-bold mt-3">RM {tour.price}</p>
          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Book Now
          </button>
        </div>
      </div>
  </Link>
  );
};

export default TourCard;
