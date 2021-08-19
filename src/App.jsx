import React, { useState } from 'react';
import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick() {
    setState({
      count: count + 1,
    });
  }

  function handleNumberClick(number) {
    setState({
      count: count + number,
    });
  }

  return (
    <Page
      count={count}
      onClick={handleClick}
      onClickNumber={handleNumberClick}
    />
  );
}
