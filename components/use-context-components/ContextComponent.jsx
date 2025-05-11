import { CountContext } from "@/lib/contexts";
import React from "react";

const ContextComponent = ({ children }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <CountContext.Provider
      value={{ count, setCount, handleIncrement, handleDecrement }}
    >
      {children}
    </CountContext.Provider>
  );
};

export default ContextComponent;
