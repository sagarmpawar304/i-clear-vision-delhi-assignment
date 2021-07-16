import  { createReducer } from '@reduxjs/toolkit';

import moviesActions from '../constants/moviesActions'


const moviesInitialState = {
  loading: false,
  movies : [],
  error: ""
}
export const moviesReducer = createReducer(moviesInitialState, (builder) => {
  builder.addCase(moviesActions.REQUEST_GET_MOVIES, (state) => {
    state.loading = true;
  });
  builder.addCase(moviesActions.SUCCESS_GET_MOVIES, (state, action) => {
    state.loading = false;
    state.movies = state.movies.concat(action.payload)
  });
  builder.addCase(moviesActions.FAILURE_GET_MOVIES, (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });
  builder.addCase(moviesActions.CLEAR_ALL_MOVIES, (state, action) => {
    state.movies = [];
  });
});


const movieInitialState = {
  loading: false,
  movie: {},
  error: '',
};
export const movieReducer = createReducer(movieInitialState, (builder) => {
  builder.addCase(moviesActions.REQUEST_GET_MOVIE, (state) => {
    state.loading = true;
  });
  builder.addCase(moviesActions.SUCCESS_GET_MOVIE, (state, action) => {
    state.loading = false;
    state.movie = action.payload;
  });
  builder.addCase(moviesActions.FAILURE_GET_MOVIE, (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });
});