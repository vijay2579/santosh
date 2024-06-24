import React, { useEffect, useState } from "react";
function DemoUseEffect() {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    console.log(" UseEffect Called");
  }, [number]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
    </>
  );
}

export default DemoUseEffect;
