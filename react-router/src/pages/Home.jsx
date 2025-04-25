import React from "react";
import { Navigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      this is Home Page
      <button
        onClick={() => {
          navigate("/about");
        }}
      ></button>
    </div>
  );
};

export default Home;
