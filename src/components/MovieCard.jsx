import React from 'react';
import PropTypes from 'prop-types';
import {Card } from 'semantic-ui-react'
import ImagePlacehoder from './ImagePlacehoder';

const MovieCard = ({ src, title }) => {
  return (
    <Card raised style={{ width: 'auto', overflow: 'hidden' }}>
      <ImagePlacehoder src={src} title={title} />
      {(title ) && (
        <Card.Content className='p-2'>
          <h5 className='m-0' style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow:"ellipsis"}}>{title}</h5>
        </Card.Content>
      )}
    </Card>
  );
};

MovieCard.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
};

export default MovieCard;
