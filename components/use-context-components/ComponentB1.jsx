import React from "react";

const ComponentB1 = () => {
  return (
    <div className="flex-1 text-blue-700 bg-blue-100 p-4 border boder-blue-700 rounded-lg">
      <p className="text-center text-lg font-bold">Component B1</p>
      <p className="text-center">
        This needs the <code className="bg-white p-1 rounded">count</code> state
        from Component A
      </p>
    </div>
  );
};

export default ComponentB1;
