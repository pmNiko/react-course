import { useState } from "react";

const baseUrl = 'https://pokeapi.co/api/v2/pokemon';

export const MultipleCustomHooks = () => {
  const [counter, setCounter] = useState( {counter: 0} );

  const increment = ( value = 1 ) => {
      console.log(value);
      console.log(counter);
      setCounter(counter + value)
  }

  const decrement = ( value = 1 ) => {
      if( counter - value <= 0 ) return;
      setCounter( counter - value )
  }
  // const {data, isLoading} = useFetch(baseUrl + '/' + counter);  

  // console.log(counter);

  return (
    <>
      <div>MultipleCustomHooks</div>
      <hr />

      {/* {
        isLoading && <p>Cargando...</p>
      }

      <h2>{data?.name}</h2> */}


      <button className="btn btn-primary mt-2" onClick={() => setCounter({counter: 2})} >Anterior</button>
      <button className="btn btn-primary mt-2" onClick={decrement} >Siguiente</button>
    </>
  )
}
