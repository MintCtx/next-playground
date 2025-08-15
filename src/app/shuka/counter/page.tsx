'use client'

import { useState } from "react";

const CounterPage = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Shuka's Counter Page!</h1>
      <br />
      <p>counter: {counter}</p>
      <button onClick={() => setCounter(cur => cur + 1)}>+</button>
      <button onClick={() => setCounter(cur => cur - 1)}>-</button>
    </div>
  );
};

export default CounterPage;