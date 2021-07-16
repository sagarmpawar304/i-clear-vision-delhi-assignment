import { useEffect, useState } from 'react';

const useWindowsSizeNumForColumns = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowSize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleWindowSize);

    // Clear event listener
    return window.removeEventListener('resize', handleWindowSize);
  }, []);

  if (width < 776) {
    return 1;
  } else if (width < 976) {
    return 2;
  } else if (width <= 1200) {
    return 3;
  } else {
    return 4;
  }
};

export default useWindowsSizeNumForColumns;
