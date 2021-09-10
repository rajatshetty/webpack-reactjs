import { mount } from 'client/clientapp';
import React, { useRef, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

export function ClientComponent() {
    const ref = useRef(null);
    const history = useHistory();
  
    useEffect(() => {
      const { onParentNavigate } = mount(ref.current, {
        initialPath: history.location.pathname,
        onNavigate: ({ pathname: nextPathname }) => {
          const { pathname } = history.location;
  
          if (pathname !== nextPathname) {
            history.push(nextPathname);
          }
        },
      });
  
      history.listen(onParentNavigate);
    }, []);

  return (<div>
      <Link to="/">First</Link>
      <Link to="/second">Second</Link>
  <div ref={ref} />
  </div>);
};
