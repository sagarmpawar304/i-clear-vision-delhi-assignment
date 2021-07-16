import { getPopularMovies, getSingleMovies, clearMovies } from './moviesActions';
import { addToFavorites, removeFromFavorites } from '../reducers/favoritesReducer';
import { increasePage } from '../reducers/pageReducers';

export { getPopularMovies, getSingleMovies, clearMovies,addToFavorites, removeFromFavorites, increasePage}