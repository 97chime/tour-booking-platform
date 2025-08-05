import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api';
import { UserContext } from '../context/UserContext';

export default function TourDetails() {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const [tour, setTour] = useState(null);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const res = await API.get(`/tours/${id}`);
        setTour(res.data);
      } catch (err) {
        setError('Could not fetch tour.');
      }
    };
    fetchTour();
  }, [id]);

  const handleBooking = async () => {
    if (!user) {
      setMessage('You must be logged in to book a tour.');
      return;
    }

    try {
      const res = await API.post('/bookings', { tourId: tour._id });
      setMessage(res.data.message);
    } catch (err) {
      console.error(err);
      setMessage(err.response.data.message || 'Booking failed. Please try again later.');
    }
  };

  if (error) return <p className="text-red-500">{error}</p>;
  if (!tour) return <p>Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">{tour.title}</h1>
      {tour.image && (
        <img src={tour.image} alt={tour.title} className="w-full rounded shadow mb-6" />
      )}
      <p className="mb-4 text-gray-700">{tour.description}</p>
      <p className="text-xl font-semibold">Price: RM {tour.price}</p>

      <button
        onClick={handleBooking}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Book Now
      </button>

      {message && <p className="mt-4 text-sm text-green-600">{message}</p>}
    </div>
  );
}
