import React, { useState } from "react";

const CounterFunction = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    console.warn("From Counter Function");
    //Using Prev State
    setCount((prev) => prev + 1);
    console.log("After first setCount: ", count); // Old value
    setCount((prev) => prev + 1);
    console.log("After second setCount: ", count); // Old value
  };

  const handleReset = () => {
    setCount(0);
  };

  console.log("Rendered Count Value: ", count); // New Count Value
  return (
    <div className="flex flex-col items-center">
      <p className="w-full text-center bg-purple-300 text-black p-2 rounded">
        Updating State by passing <code>updater function</code> with{" "}
        <code>prevState</code> as param.
      </p>
      <p className="font-medium text-[150px]">{count}</p>

      <div className="flex gap-x-16 mt-4 max-w-lg">
        <button
          className="w-lg bg-purple-300 text-black px-4 py-2 rounded-sm text-xl cursor-pointer"
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

export default CounterFunction;
