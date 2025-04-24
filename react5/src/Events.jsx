import { React, useState, useEffect } from "react";

const Events = () => {
  const [windowwidth, setWindowWidth] = React.useState(window.innerWidth);

  return <div>{windowwidth}</div>;
};

export default Events;
