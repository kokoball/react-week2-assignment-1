import React from 'react';

import Counter from './Counter';
import Buttons from './Buttons';

// eslint-disable-next-line react/prop-types
export default function Page({ count, onClick }) {
  return (
    <div>
      <p>Hello, world!!!</p>
      <p>Hi!</p>
      <Counter count={count} onClick={onClick} />
      <Buttons onClick={onClick} />
    </div>
  );
}
