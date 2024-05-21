import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemons: [],
  page: 0,
  isLoading: false,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons;
    },
  },
});

// Action creators are generated for each case reducer function
export const { startLoading, setPokemons } = pokemonSlice.actions;
