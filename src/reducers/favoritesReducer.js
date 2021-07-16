import { createSlice  } from '@reduxjs/toolkit';


const favorites = createSlice({
  name: "Favorites",
  initialState: {
    favorites: []
  },
  reducers:{
    addToFavorites(state, action){
      // check if movie already exist
      state.favorites = [...state.favorites, action.payload]
    },
    removeFromFavorites(state, action){
      state.favorites = state.favorites.filter(movie => movie.id !== action.payload)
    }
  }
})

const { actions, reducer } = favorites
export const { addToFavorites, removeFromFavorites } = actions;

export default reducer;