import { useEffect, useState } from "react"

// !! Componente de muestra acerca del evento clenup
// !! Este se ejecuta justo al desmontar el componente
export const Message = () => {
    const [coords, setCoords] = useState({x: 0, y: 0});
 
    useEffect(() => {
        const onMouseMove = ({ x, y }) => setCoords({ x,y });

        window.addEventListener( 'mousemove', onMouseMove);
      
        return () => {
            window.removeEventListener( 'mousemove', onMouseMove );
            console.log('Clenup - listener removido! 😎');
        }
    }, [])
    
 
    return (
        <>
            <h3>Usuario ya existe</h3>

            { JSON.stringify(coords) }
        </>
    )
}