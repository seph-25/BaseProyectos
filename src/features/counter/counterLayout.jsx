import { useState } from "react";
import { CounterLayout1 } from "./counter1/counter1";
import { CounterLayout2 } from "./counter2/counter2";

export function CounterLayout() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CounterLayout1 count={count} setCount={setCount}/>
      
      <CounterLayout2 count={count} setCount={setCount}/>
    </>
  );
}
