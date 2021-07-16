import  moviesActions from '../constants/moviesActions';

/**
 * 
 * @param {number} page
 */
export const getPopularMovies = (page) => 
  ({ type: moviesActions.REQUEST_GET_MOVIES, payload: {page} });


/**
 * 
 * @param {number} movie_id 
 */
export const getSingleMovies = (movie_id) => ({ type: moviesActions.REQUEST_GET_MOVIE, payload: { movie_id } });


export const clearMovies =  () => ({
  type: moviesActions.CLEAR_ALL_MOVIES
})