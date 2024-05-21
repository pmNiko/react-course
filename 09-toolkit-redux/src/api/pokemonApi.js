import axios from "axios";

const baseURL = "https://pokeapi.co/api/v2/";
const endpoint = "pokemon?limit=10&offset=";

export const pokemonApi = axios.create({
  baseURL,
});
