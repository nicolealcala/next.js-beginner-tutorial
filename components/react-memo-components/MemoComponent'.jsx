import { memo, useState } from "react";

export default function MemoComponent() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  return (
    <>
      <label className="text-2xl">
        Name{": "}
        <input
          value={name}
          className="border border-purple-200 rounded"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className="text-2xl">
        Address{": "}
        <input
          value={address}
          className="border border-purple-200 rounded"
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <Greeting name={name} />
    </>
  );
}

const Greeting = memo(function Greeting({ name }) {
  console.log("Greeting was rendered at", new Date().toLocaleTimeString());
  return (
    <h3 className="text-2xl">
      Hello{name && ", "}
      {name}!
    </h3>
  );
});
