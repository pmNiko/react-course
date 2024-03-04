import { useCounter } from "../hooks/useCounter"

const valueChangeCounter = 3;

export const CounterWithCustomHook = () => {
    const {counter, increment, decrement, reset} = useCounter();

    return (
        <>
            <h1>Counter with Custom hook: {counter} </h1>

            <hr />


            <button className="btn btn-primary" onClick={ () => decrement(valueChangeCounter) } >-{valueChangeCounter}</button>
            <button className="btn btn-primary" onClick={reset} >Reset</button>
            <button className="btn btn-primary" onClick={ () => increment(valueChangeCounter) } >+{valueChangeCounter}</button>
        </>
    )
}
