import React, { useEffect } from 'react';
import { Button, Grid, Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ImagePlacehoder from '../components/ImagePlacehoder';
import { getSingleMovies, addToFavorites, removeFromFavorites } from '../actions';

const Movie = () => {
  const { loading, movie } = useSelector(state => state.movie);
  const { favorites } = useSelector((state) => state.favorites);
  const location = useLocation();
  const dispatch = useDispatch();

  const handleFavorites = () => {
    const id= movie.id;
    // 1) Check favorites length is empty if it is true then and to it
    if(favorites.length === 0) {
      return dispatch(addToFavorites(movie));
    }
    const alreadyExist = favorites.find(movie => movie.id ===  id);

    if (alreadyExist) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(addToFavorites(movie));
    }
  }

  useEffect(() => {
    const movie_id= parseInt(location.pathname.split("/")[2]);
    dispatch(getSingleMovies(movie_id))
  }, [dispatch, location]);

  useEffect(() => {
    document.title = movie ? `MoviesApp: ${movie.title}` : 'MoviesApp';
  }, [movie]);

  return (
    <>
      {loading && <Loader content='Loading' />}
      {!loading && Object.values(movie).length > 0 && (
        <div className='mx-auto my-5' style={{ maxWidth: 1000 }}>
          <Grid stackable columns='2'>
            <Grid.Column className="d-flex align-items-center justify-content-center p-0">
              <ImagePlacehoder src={movie.poster_path} title={movie.title} />
            </Grid.Column>

            <Grid.Column className='text-white'>
              {/* title */}
              <h1 className='mb-3'>{movie.title}</h1>

              {/* geners */}
              <p>
                <strong>Genres</strong> : {movie.genres.map((item) => item.name).join(', ')}
              </p>

              {/* status */}
              <p>
                <strong>Status</strong> : {movie.status}
              </p>

              {/* popularity */}
              <h6>Popularity : {movie.popularity}</h6>

              {/* overview */}
              <h6>Overview :</h6>
              <p style={{ whiteSpace: 'pre-wrap' }}>{movie.overview}</p>

              {/* runtime */}
              <p>
                <strong>Runtime</strong> : {movie.runtime} minutes
              </p>

              {/* budget */}
              <p>
                <strong>Budget</strong> : ${movie.budget}
              </p>

              {/* revenue */}
              <p>
                <strong>Revenue</strong> : ${movie.revenue}
              </p>

              {/* Vote average */}
              <p>
                <strong>Vote Average</strong> : {movie.vote_average}
              </p>

              {/* Vote Count */}

              <p>
                <strong>Vote Count</strong> : {movie.vote_count}
              </p>
              <Button color='orange' onClick={handleFavorites}>
                {favorites.find((item) => item.id === movie.id) ? 'Remove from' : 'Add'} Favorites
              </Button>
            </Grid.Column>
          </Grid>
        </div>
      )}
    </>
  );
}

Movie.propTypes = {
  title: PropTypes.string,
  status: PropTypes.string,
  popularity: PropTypes.number,
  overview: PropTypes.string,
  runtime: PropTypes.number,
  revenue: PropTypes.number,
  genres: PropTypes.object,
  budget: PropTypes.number,
};

export default Movie
