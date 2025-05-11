import React, { useContext } from "react";
import { CountContext } from "./ComponentA";

const ComponentC1Child = () => {
  const { count, setCount } = useContext(CountContext);
  return (
    <div className="text-purple-700 bg-purple-100 p-4 border boder-purple-700 rounded-lg">
      <p className="text-center text-lg font-bold">Component C1.1</p>
      <p className="text-center">
        This needs the <code className="bg-white p-1 rounded">count</code> state
        from Component A
      </p>
      <p className="text-center">
        Count from Component A:{" "}
        <code className="font-bold bg-white p-1 rounded">{count}</code>
      </p>

      <button
        className="rounded bg-purple-700 text-white p-1"
        onClick={() => setCount((prev) => prev + 2)}
      >
        Increment
      </button>
    </div>
  );
};

export default ComponentC1Child;
