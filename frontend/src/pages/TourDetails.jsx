import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api';

export default function TourDetails() {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [error, setError] = useState('');

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

      <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Book Now
      </button>
    </div>
  );
}
