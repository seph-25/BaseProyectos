import useCounter from "../hooks/useCounter";
import { COUNTER_TEXT } from "../constants/counter.text.constants";


export function RegisterCounter({ count, setCount }) {
  const { handleIncrement } = useRegister(setCount);

  return (
    <>
      <p>
        {COUNTER_TEXT.COUNTER_LABEL} {count}
      </p>
    </>
  );
}
