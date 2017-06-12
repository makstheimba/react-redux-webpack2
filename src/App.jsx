import React from 'react';
import getRandomPointInCircle from 'helpers/dungeon';

require('style.scss');

const radius = 250;

const App = () => (
  <div style={{ width: radius * 2, height: radius * 2, backgroundColor: 'yellow', borderRadius: radius }}>
    {
      [...Array(10000)].map(() => {
        const { x, y } = getRandomPointInCircle(radius);
        return (
          <div
            style={{
              top: radius + x,
              left: radius + y,
              width: '2px',
              height: '2px',
              borderRadius: '1px',
              backgroundColor: 'red',
              position: 'absolute',
            }}
          />
        );
      })
    }
  </div>
);

export default App;
