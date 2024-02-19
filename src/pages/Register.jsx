import axios from "axios";
import React, { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "https://bookingapi-u3iy.onrender.com/register",
      {
        email,
        password,
      }
    );
    console.log(res);
  };
  return (
    <div>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
