import React from "react";
import { useUser } from "../useContext/UseContext";

const Footer = () => {
  const { updateUser } = useUser();

  return (
    <footer className="bg-gray-700 text-white text-center p-4">
      <button
        onClick={() => updateUser({ name: "Engr Sherliyat" })}
        className="bg-green-600 px-3 py-1 rounded"
      >
        Change User Name (Footer)
      </button>
    </footer>
  );
};

export default Footer;
