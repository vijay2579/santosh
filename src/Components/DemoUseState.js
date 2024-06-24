import React, { useState } from "react";

function DemoUseState() {
  const [value, setValue] = useState("Test");
  const clickMe = () => {
    console.log(value);
  };

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => clickMe()}>Click Me</button>
    </>
  );
}

export default DemoUseState;
