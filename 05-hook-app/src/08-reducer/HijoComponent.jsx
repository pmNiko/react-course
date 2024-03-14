import { forwardRef, useState } from 'react';

export const HijoComponent = forwardRef(({ value, onChange }, ref) => {
    const [hidden, setHidden] = useState(false)

    const toggleHidden = () => {
        console.log('Funcion en el compoenente hijo!');
        setHidden(!hidden);
    }


    return (
        <div>
            <p hidden={hidden} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, magnam.</p>
            <button ref={ref} hidden onClick={toggleHidden} >Click me</button>
        </div>
    )}
);