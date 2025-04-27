import React, { useState } from "react";
import Button from "../shared/Button";

const CounterCorrect = (props) => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrementTwice = () => {
    setCount((prev) => prev - 1);
    setCount((prev) => prev - 1);
  };

  const handleIncrementTwice = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="w-full flex flex-col items-center gap-y-6">
      <p className="font-semibold text-9xl">{count}</p>
      <div className="flex justify-between gap-x-4 w-xs">
        <Button
          color="yellow"
          text="-"
          onClick={props.isTwice ? handleDecrementTwice : handleDecrement}
          className="w-sm"
        />
        <Button
          color="green"
          text="+"
          onClick={props.isTwice ? handleIncrementTwice : handleIncrement}
          className="w-sm"
        />
      </div>
      <Button
        color="blue"
        text="Reset"
        onClick={handleReset}
        className="w-xs"
      />
    </div>
  );
};

export default CounterCorrect;
