import { useState } from "react";
import { USER_COUNTER_NUMBERS } from "./consts/consts.number";
import { RegisterUser } from "./registerUser/regsiterUser";
import { CountViewer } from "./countViewer/countViewer";

export function UserCounterLayout() {
  const [students, setStudents] = useState([]);

  return (
    <>
      <RegisterUser count={students} setStudents={setStudents}/>
      <br />
      <CountViewer count={students.length}/>
    </>
  );
}
