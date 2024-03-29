import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(
        "https://bookingapi-u3iy.onrender.com/protected",
        {
          withCredentials: true,
        }
      );
      setUser(res.data.authData);
    };
    getUser();
  }, []);
  return <div>{user ? <h3>{user.email}</h3> : null}</div>;
}
