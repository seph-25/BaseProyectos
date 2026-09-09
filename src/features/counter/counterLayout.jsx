import { useState } from 'react'
import { COUNTER_TEXT } from './constants/counter.constants'

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
            <p>Contador de clicks:{count}</p>
            <button onClick={count < 5 && handleIncrement}>COUNTER_TEXT.INCREMENT</button>
            <button onClick={count > 0 ? handleDecrement: null}>COUNTER_TEXT.DECREMENT</button>
        </>
    )
}