// src/pages/Footer.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../store/CounterSlice/CounterSlice";

const Footer = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.Counter.value);

  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p className="text-lg">
        Current Count: <span className="font-bold">{value}</span>
      </p>
      <button
        onClick={() => dispatch(reset())}
        className="ml-4 bg-yellow-500 px-3 py-1 rounded hover:bg-yellow-600"
      >
        Reset
      </button>
    </footer>
  );
};

export default Footer;
