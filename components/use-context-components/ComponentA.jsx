import React, { createContext, useState } from "react";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

export const CountContext = createContext();

const ComponentA = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <CountContext.Provider value={{ count, setCount }}>
      <div className="text-green-700 bg-green-100 p-4 border boder-green-700 rounded-lg">
        <p className="text-center text-2xl font-bold">Component A</p>
        <p className="text-center my-2">
          state: <code className="bg-white p-1 rounded">count</code> ={" "}
          <code className="bg-white p-1 rounded">{count}</code>
        </p>

        <div className="max-w-fit space-x-4 mx-auto my-4">
          <button
            className="rounded p-2 bg-green-700 text-white"
            onClick={handleDecrement}
          >
            Decrement Count
          </button>
          <button
            className="rounded p-2 bg-green-700 text-white"
            onClick={() => setCount((prev) => prev + 1)}
          >
            Increment Count
          </button>
        </div>

        <p className="text-center">
          This component has children and grandchildren:
        </p>
        <div className="flex gap-x-4 mt-5">
          <ComponentB />
          <ComponentC />
        </div>
      </div>
    </CountContext.Provider>
  );
};

export default ComponentA;
