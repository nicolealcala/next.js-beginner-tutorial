import { memo, useState } from "react";

export default function MemoComponent() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  return (
    <div className="flex flex-col gap-y-12 p-4 rounded-lg border border-green-400">
      <label className="text-2xl">
        Name{": "}
        <input
          value={name}
          className="border border-grey-200 rounded"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className="text-2xl">
        Address{": "}
        <input
          value={address}
          className="border border-grey-200 rounded"
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <Greeting name={name} />
    </div>
  );
}

const Greeting = memo(function Greeting({ name }) {
  console.log(
    "Greeting was rendered at",
    new Date().toLocaleTimeString("en-US")
  );
  return (
    <h3 className="text-2xl rounded-md bg-purple-200">
      Hello{name && ", "}
      {name}!
    </h3>
  );
});
