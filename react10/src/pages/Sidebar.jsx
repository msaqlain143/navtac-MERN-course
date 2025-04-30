// src/pages/Sidebar.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { increment } from "../store/CounterSlice/CounterSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <aside className="w-60 bg-gray-200 p-4">
      <h2 className="text-lg font-semibold mb-4">Sidebar</h2>
      <button
        onClick={() => dispatch(increment())}
        className="bg-green-500 px-4 py-2 text-white rounded hover:bg-green-600 transition"
      >
        Increment
      </button>
    </aside>
  );
};

export default Sidebar;
