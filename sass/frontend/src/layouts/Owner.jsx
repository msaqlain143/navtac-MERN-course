import React from "react";
import { Outlet } from "react-router";

const Owner = () => {
  return (
    <>
      <div>Owner</div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Owner;
