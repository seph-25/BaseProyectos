import { USER_COUNTER_NUMBERS } from "../consts/consts.number";

function useCounter(setCount) {

    function handleIncrement() {
        setCount((prev) => prev + USER_COUNTER_NUMBERS.INCREMENT)
    }

    return {handleIncrement}

} export default useCounter;