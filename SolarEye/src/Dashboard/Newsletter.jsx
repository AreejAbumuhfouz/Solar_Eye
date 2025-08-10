import React, { useEffect, useState } from 'react';

export default function Newsletter() {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSubscribers() {
      setLoading(true);
      try {
        const res = await fetch('https://solar-eye.onrender.com/api/newsletter/all');
        if (!res.ok) throw new Error('Failed to fetch subscribers');
        const data = await res.json();
        setSubscribers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchSubscribers();
  }, []);

  if (loading) return <p>Loading subscribers...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ maxWidth: 600, margin: 'auto' }}>
      <h2 className="text-xl font-bold mb-4">Subscribers List</h2>
      {subscribers.length === 0 ? (
        <p>No subscribers found.</p>
      ) : (
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2 text-left">Email</th>
              <th className="border border-gray-300 p-2 text-left">Subscribed At</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map(({ _id, email, createdAt }) => (
              <tr key={_id} className="hover:bg-gray-100">
                <td className="border border-gray-300 p-2">{email}</td>
                <td className="border border-gray-300 p-2">
                  {new Date(createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
