import { useEffect, useState, useContext } from 'react';
import API from '../api';
import { UserContext } from '../context/UserContext';

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await API.get('/bookings/mine');
        setBookings(res.data);
      } catch (err) {
        console.error('Error fetching bookings:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (!user) return <div className="text-center mt-10">Please log in to view your bookings.</div>;
  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Bookings</h1>
      {bookings.length === 0 ? (
        <p>You haven't booked any tours yet.</p>
      ) : (
        <ul className="space-y-4">
          {bookings.map((b) => (
            <li key={b._id} className="p-4 border rounded shadow-sm">
              <h2 className="text-xl font-semibold">{b.tour.title}</h2>
              <p>{b.tour.description}</p>
              <p className="text-sm text-gray-500">
                Booked on {new Date(b.createdAt).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
