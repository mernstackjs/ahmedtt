import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/ahmedtt" element={<Home />} />
        <Route path="/ahmedtt/login" element={<Login />} />
        <Route path="/ahmedtt/register" element={<Register />} />
        <Route path="/ahmedtt/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
