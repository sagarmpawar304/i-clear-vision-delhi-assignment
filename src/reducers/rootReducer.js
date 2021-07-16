import { combineReducers } from '@reduxjs/toolkit';

import { movieReducer, moviesReducer } from './moviesReduces';
import favoriteReducer from './favoritesReducer'
import pageReducer from './pageReducers'

const rootReducer = combineReducers({
  movies: moviesReducer,
  movie: movieReducer,
  favorites: favoriteReducer,
  page: pageReducer
});

export default rootReducer;
