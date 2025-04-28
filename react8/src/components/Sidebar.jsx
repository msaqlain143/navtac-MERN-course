import React from "react";
import { useUser } from "../useContext/UseContext";

const Sidebar = () => {
  const { updateUser } = useUser();

  return (
    <aside className="bg-gray-800 text-white p-4">
      <button
        onClick={() => updateUser({ age: 35 })}
        className="bg-purple-600 px-3 py-1 rounded"
      >
        Update Age (Sidebar)
      </button>
    </aside>
  );
};

export default Sidebar;
