import { useMemo, useState } from 'react';
import {useCounter} from '../hooks';
import { Small } from './Small';

const heavyStuff = (iterations = 100) => {
    for (const i of Array(iterations)) {
        console.log('Ahi vamos...');
    }

    return `${iterations} iteraciones realizadas`;
}

export const MemoHook = () => {
    const {increment, counter} = useCounter(4000);
    const [show, setShow] = useState(true);

    const momorizedValue = useMemo( () => heavyStuff(counter), [counter] )
   
    return (
        <>
            <h2>Counter: <Small value={counter} /> </h2>
            <hr />

            <h4> { momorizedValue } </h4>

            <button
                className='btn btn-primary'
                onClick={() => increment()}
            >
                +1
            </button>

            <button
                className='btn btn-outline-info'
                onClick={() => setShow(!show)}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </>
    )
}
