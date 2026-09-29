import { USER_COUNTER_TEXT } from "../consts/consts.text";
import { USER_COUNTER_NUMBERS } from "../consts/consts.number";
import  useCounter from "../hooks/useCounter";

export function RegisterUser({count, setCount}) {

  const {handleIncrement} = useCounter(setCount)
  
  return (
    <>
      <h2>{USER_COUNTER_TEXT.USER_COUNTER_TITLE}</h2>
      <form onSubmit={count < USER_COUNTER_NUMBERS.MAX_COUNT ? handleIncrement : null }>
        <label htmlFor="user-name">{USER_COUNTER_TEXT.LABEL_NAME}</label>
        <input
          type="text"
          id="user-name"
          placeholder={USER_COUNTER_TEXT.PLACEHOLDER}
          required
        />
        <br />
        <button type="submit" onClick= >
          {USER_COUNTER_TEXT.ADD}
        </button>
      </form>
    </>
  );
}
