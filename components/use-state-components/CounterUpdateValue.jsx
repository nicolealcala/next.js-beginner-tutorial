import React, { useState } from "react";

const CounterValue = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    console.warn("From Counter Value");
    // Using count snapshot
    setCount(count + 1);
    console.log("After first setCount: ", count); // Old Count value
    setCount(count + 1);
    console.log("After second setCount: ", count); // Old Count value
  };

  const handleReset = () => {
    setCount(0);
  };

  console.log("Rendered Count Value: ", count); // New Count Value
  return (
    <div className="flex flex-col items-center">
      <p className="w-full text-center bg-blue-300 text-black p-2 rounded">
        Updating State by passing <code>nexState</code> value
      </p>
      <p className="font-medium text-[150px]">{count}</p>

      <div className="flex gap-x-16 mt-4 max-w-lg">
        <button
          className="w-lg bg-blue-300 text-black px-4 py-2 rounded-sm text-xl cursor-pointer"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="w-lg border border-white rounded-sm text-white px-4 py-2 cursor-pointer"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterValue;
