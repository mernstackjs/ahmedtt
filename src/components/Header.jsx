import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex justify-between items-center bg-slate-900 text-white p-3">
      Header
      <nav className="flex gap-4">
        <Link to="/ahmedtt">Home</Link>
        <Link to="/ahmedtt/register">Register</Link>
        <Link to="/ahmedtt/login">Login</Link>
        <Link to="/ahmedtt/profile">Profile</Link>
      </nav>
    </div>
  );
}
