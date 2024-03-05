import { useState } from "react"

export const useCounter = ( initialState = 10 ) => {
    const [counter, setCounter] = useState( initialState )

    const reset = () => setCounter(initialState)

    const increment = ( value = 1 ) => setCounter(counter + value)

    const decrement = ( value = 1 ) => {
        if( counter - value <= 0 ) return;
        setCounter( counter - value )
    }

    return {
        // Properties
        counter,
        
        // Methods
        increment,
        decrement,
        reset
    }
}
