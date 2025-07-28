import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <p className="p-4 text-red-500">You must be logged in to view this page.</p>;

  return (
    <div className="max-w-md mx-auto p-6 shadow-md rounded-xl mt-10">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}

export default Profile;
