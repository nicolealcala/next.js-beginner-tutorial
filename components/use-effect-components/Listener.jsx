import React, { useEffect, useState } from "react";

const UseEffectListener = () => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <div>
      The size of the window is {width} x {height}
    </div>
  );
};

export default UseEffectListener;
