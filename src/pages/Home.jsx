import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Loader } from 'semantic-ui-react';

import { getPopularMovies, increasePage } from '../actions';
import Movies from '../components/Movies';

function Home() {
  const { loading, movies } = useSelector((state) => state.movies);
  const { page } = useSelector((state) => state.page);
  const dispatch = useDispatch();

  useEffect(() => {
    // Condition 1: if movies array is empty and page is 1 i.e default condition
    if(page === 1 && movies.length === 0){
      dispatch(getPopularMovies(page));
    }

    if (movies.length > 0 && page > movies.length / 20) {
      dispatch(getPopularMovies(page));
    }
    
    window.document.title = "MoviesApp"
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, dispatch]);


  return (
    <div className="movies">
      <Movies movies={movies} />
      {loading && <Loader active size='big' />}
      <div className="d-flex align-items-center justify-content-center mt-5">
        <Button onClick={() => dispatch(increasePage())} primary>Load More</Button>
      </div>
    </div>
  );
}

export default Home;
