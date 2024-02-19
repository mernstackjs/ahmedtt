import axios from "axios";
import React, { useState, useEffect } from "react";

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const resp = await axios.get("http://localhost:3003/users");
        setUser(resp.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getUsers();

    // Clean up function
    return () => {
      // You can perform cleanup here if needed
    };
  }, []);

  return (
    <div>
      <header className="bg-slate-900 flex text-white p-3">header</header>
      <h1>welcome</h1>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {user &&
        user.map((u) => (
          <div key={u._id}>
            <h3>{u.email}</h3>
          </div>
        ))}
    </div>
  );
}
