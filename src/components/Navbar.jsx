import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

const Navbar = () => {
  const { favorites } = useSelector(state => state.favorites)
  return (
    <Grid className='bg-dark mx-auto d-flex align-items-center' columns='2' style={{height: 70}}>
      <Grid.Column style={{ maxWidth: 1200 }}>
        <Link to='/'>
          <h1 className='text-warning ml-4'>MoviesApp</h1>
        </Link>
      </Grid.Column>

      <Grid.Column>
        <Link to='/favorites'>
          <div className='d-flex flex-column align-items-end justify-content-center text-right mr-4'>
            <h4 className='mb-0 mr-5'>{favorites.length}</h4>
            <h4 className=''>Favorites</h4>
          </div>
        </Link>
      </Grid.Column>
    </Grid>
  );
}

export default Navbar
