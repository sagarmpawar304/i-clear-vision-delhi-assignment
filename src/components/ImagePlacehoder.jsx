import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Placeholder, Image } from 'semantic-ui-react';

const ImagePlacehoder = ({ src, title }) => {
  const [loaded, setLoaded] = useState(false);

  const handleOnLoad = () => {
    setLoaded(true);
  };
  return (
    <>
      <Placeholder style={{ display: loaded ? 'none' : 'block' }}>
        <Placeholder.Image rectangular />
      </Placeholder>
      <Image
        src={`https://image.tmdb.org/t/p/w500/${src}`}
        onLoad={handleOnLoad}
        style={{ display: loaded ? 'block' : 'none' }}
        prop={title}
      />
    </>
  );
};

ImagePlacehoder.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
};

export default ImagePlacehoder;
