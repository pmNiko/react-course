import { useCounter, useFetch } from "../hooks";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

const baseUrl = 'https://pokeapi.co/api/v2/pokemon';

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1)
  const { data, isLoading } = useFetch(baseUrl + '/' + counter);  

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

      <button 
        className="btn btn-primary mt-2"
        onClick={() => decrement()} 
        disabled={isLoading}
        >
          Anterior
      </button>
      <button 
        className="btn btn-primary mt-2" 
        onClick={() => increment()} 
        disabled={isLoading}
        >
          Siguiente
      </button>
    </>
  )
}
