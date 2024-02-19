import axios from "axios";
import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "http://localhost:3003/login",
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );
    console.log(res);
  };
  return (
    <div>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
