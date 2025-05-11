import React from "react";
import ComponentC1Child from "./ComponentC1.1";

const ComponentB1 = () => {
  return (
    <div className="text-yellow-700 bg-yellow-100 p-4 border boder-yellow-700 rounded-lg">
      <p className="text-center text-lg font-bold">Component C1</p>
      <p className="text-center mb-5">This has 1 child:</p>
      <ComponentC1Child />
    </div>
  );
};

export default ComponentB1;
