import { useFetch, useCounter} from "../hooks";
import { LoadingMessage } from "../03-examples/LoadingMessage";
import { PokemonCard } from "../03-examples/PokemonCard";

const baseUrl = 'https://pokeapi.co/api/v2/pokemon';

export const Layout = () => {
  const {counter, increment, decrement, reset} = useCounter(1)
  const {data, isLoading} = useFetch(baseUrl + '/' + counter);  

  return (
    <>
      <div>MultipleCustomHooks</div>
      <hr />

      {
        isLoading 
          ? <LoadingMessage /> 
          : <PokemonCard 
              id={data.id} 
              name={data.name}  
              sprites={[
                data.sprites.front_default,
                data.sprites.front_shiny,
                data.sprites.back_default,
                data.sprites.back_shiny,
              ]}
            />
      }

      <button className="btn btn-primary mt-2" onClick={() => decrement()} >Anterior</button>
      <button className="btn btn-primary mt-2" onClick={() => increment()} >Siguiente</button>
    </>
  )
}
