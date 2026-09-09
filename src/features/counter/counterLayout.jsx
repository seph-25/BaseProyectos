import { useState } from 'react'
import { COUNTER_TEXT } from './constants/counter.text.constants'
import { COUNTER_NUMBERS } from './constants/counter.numbers.constants'

export function CounterLayout() {

    const [count, setCount] = useState(0)

    function handleIncrement() {
        setCount(prev => prev + 1)
    }

    function handleDecrement() {
        setCount(prev => prev - 1)
    }

    return (
        <>
            <h2>Contador</h2>
            <p>{COUNTER_TEXT.COUNTER_LABEL} {count}</p>
            <button onClick={count < COUNTER_NUMBERS.MAX_COUNT && handleIncrement}>{COUNTER_TEXT.INCREMENT}</button>
            <button onClick={count > COUNTER_NUMBERS.MIN_COUNT ? handleDecrement: null}>{COUNTER_TEXT.DECREMENT}</button>
        </>
    )
}