import { useState } from "react";
import { USER_COUNTER_NUMBERS } from "./consts/consts.number";
import { RegisterUser } from "./registerUser/regsiterUser";
import { CountViewer } from "./countViewer/countViewer";

export function UserCounterLayout() {
  const [count, setCount] = useState(USER_COUNTER_NUMBERS.INITIAL_COUNT);

  return (
    <>
      <RegisterUser count={count} setCount={setCount}/>
      <br />
      <CountViewer count={count}/>
    </>
  );
}
