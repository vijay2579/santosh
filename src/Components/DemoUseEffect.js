import React, { useEffect, useState } from "react";
function DemoUseEffect() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Test");
  useEffect(() => {
    console.log(" UseEffect Called");
  }, [number, name]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
}

export default DemoUseEffect;
