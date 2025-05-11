import React from "react";
import ComponentC1 from "./ComponentC1";

const ComponentC = () => {
  return (
    <div className="flex-1 text-red-700 bg-red-100 p-4 border boder-red-700 rounded-lg">
      <p className="text-center text-xl font-bold">Component C</p>
      <p className="text-center mb-5">
        This is Component A's second child. This has the 1 child:
      </p>
      <ComponentC1 />
    </div>
  );
};

export default ComponentC;
