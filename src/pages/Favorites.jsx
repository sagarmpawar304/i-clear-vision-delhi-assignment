import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Movies from '../components/Movies';

function Favorites() {
  const { favorites } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    window.document.title = 'MoviesApp: Favorites';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className='movies'>
      {/* if there is no favorites movies */}
      {favorites.length === 0 && (
        <h1 className='mt-5 text-center text-warning'>Please add movies to your favorite list</h1>
      )}
      <Movies movies={favorites} children={<h4>Remove from list</h4>} />
    </div>
  );
}


export default Favorites;
