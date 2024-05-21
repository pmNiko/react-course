import { pokemonApi } from "../../../api";
import { setPokemons, startLoading } from "./slice";

// const baseUrl = "https://pokeapi.co/api/v2/";
const endpoint = "pokemon?limit=10&offset=";

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoading());

    // TODO: realizar la accion http
    // const resp = await fetch(`${baseUrl}/${endpoint}${page * 10}`);
    // const data = await resp.json();
    const { data } = await pokemonApi.get(`${endpoint}${page * 10}`);

    dispatch(
      setPokemons({
        page: page + 1,
        pokemons: data.results,
      })
    );
  };
};
