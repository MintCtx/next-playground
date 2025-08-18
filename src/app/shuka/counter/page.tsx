'use client'

import Button from "@/app/common/Button";
import { useState } from "react";

const CounterPage = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Shuka's Counter Page!</h1>
      <br />
      <p>counter: {counter}</p>
      <Button name="+" onClick={() => setCounter(cur => cur + 1)} />
      <Button name="-" onClick={() => setCounter(cur => cur - 1)} />
    </div>
  );
};

export default CounterPage;