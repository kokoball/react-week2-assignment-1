import React from 'react';

import Button from './Button';

// eslint-disable-next-line react/prop-types
export default function Buttons({ onClick }) {
  return (
    <p>
      {[1, 2, 3].map((i) => (
        <Button key={i} onClick={() => onClick(i)}>
          {i}
        </Button>
      ))}
    </p>
  );
}
