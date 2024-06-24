import { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [name, setName] = useState("Test");
  return (
    <>
      <div>
        <Child value={name} data="dummy Data" data1="sasas" />
      </div>
    </>
  );
}
