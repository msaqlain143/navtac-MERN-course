// src/pages/Navbar.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { decrement } from "../store/CounterSlice/CounterSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Navbar</h1>
      <div className="flex items-center space-x-4">
        <button className="hover:text-blue-200 transition">Home</button>
        <button className="hover:text-blue-200 transition">About</button>
        <button className="hover:text-blue-200 transition">Contact Us</button>
      </div>
      <button
        onClick={() => dispatch(decrement())}
        className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Decrement
      </button>
    </nav>
  );
};

export default Navbar;
