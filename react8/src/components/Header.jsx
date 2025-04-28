import React from "react";
import { useUser } from "../useContext/UseContext";

const Header = () => {
  const { user } = useUser();

  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-xl font-bold">Welcome, {user.name}</h1>
    </header>
  );
};

export default Header;
