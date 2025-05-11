import React from "react";
import ComponentB1 from "./ComponentB1";
import ComponentB2 from "./ComponentB2";

const ComponentB = () => {
  return (
    <div className="flex-1 text-red-700 bg-red-100 p-4 border boder-red-700 rounded-lg">
      <p className="text-center text-xl font-bold">Component B</p>
      <p className="text-center">
        This is Component A's first child. This has the ff children:
      </p>
      <div className="flex gap-x-2 mt-5">
        <ComponentB1 />
        <ComponentB2 />
      </div>
    </div>
  );
};

export default ComponentB;
