import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';

import Card from './MovieCard.jsx';
import useWindowSize from '../hooks/useWindowSize';
import { removeFromFavorites} from '../actions'

const Movies = ({ movies, children }) => {
  const [numOfColumns] = useState(useWindowSize());
  const dispatch = useDispatch()
  return (
    <>
      <Grid columns={numOfColumns}>
        {movies.map((movie) => {
          const { id, title, poster_path } = movie;
          return (
            <Grid.Column key={id} className='card-wrapper'>
              <Link to={`/movie/${id}`}>
                <Card title={title} src={poster_path} />
              </Link>
              {children && (
                <div className='remove-favorite' style={{cursor: "pointer"}} onClick={() => dispatch(removeFromFavorites(id))}>
                  {children}
                </div>
              )}
            </Grid.Column>
          );
        })}
      </Grid>
    </>
  );
};

Movies.protoTypes = {
  movies: PropTypes.array,
  children: PropTypes.element
};

export default Movies;
