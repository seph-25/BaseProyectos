import useCounter from "../hooks/useCounter";
import { COUNTER_NUMBERS } from "../constants/counter.numbers.constants";
import { COUNTER_TEXT } from "../constants/counter.text.constants";

export function CounterLayout2({ count, setCount }) {
  const { handleIncrement, handleDecrement } = useCounter(setCount);

  return (
    <>
      <h2>{COUNTER_TEXT.COUNTER_TITLE}</h2>
      <p>
        {COUNTER_TEXT.COUNTER_LABEL} {count}
      </p>
      <button onClick={count < COUNTER_NUMBERS.MAX_COUNT && handleIncrement}>
        {COUNTER_TEXT.INCREMENT}
      </button>
      <button
        onClick={count > COUNTER_NUMBERS.MIN_COUNT ? handleDecrement : null} disabled={count <= COUNTER_NUMBERS.MIN_COUNT}
      >
        {COUNTER_TEXT.DECREMENT}
      </button>
    </>
  );
}
