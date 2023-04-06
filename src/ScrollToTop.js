import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop({ history }) {
  const { pathname } = useLocation();

  useLayoutEffect( () => {
    window.scrollTo({top:0, behavior:"auto"})
  },[pathname]
  )

  return (null);
}

export default ScrollToTop;