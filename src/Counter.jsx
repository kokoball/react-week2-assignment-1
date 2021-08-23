import React from 'react';

// prettier-ignore
// eslint-disable-next-line react/prop-types
export default function Counter({ count, onClick }) {
  return (
    <button type="button" onClick={() => onClick(1)}>
      Click me! (
      { count }
      )
    </button>
  );
}
