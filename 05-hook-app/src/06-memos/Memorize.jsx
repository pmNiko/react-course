import { useState } from 'react';
import {useCounter} from '../hooks';
import { Small } from './Small';

export const Memorize = () => {
    const {increment, counter} = useCounter(0);
    const [show, setShow] = useState(true);
   
    return (
        <>
            <h2>Counter: <Small value={counter} /> </h2>

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
