"use client";

import { useState } from "react";
import styles from "./counter-styles.module.css";

const CounterPage = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Shuka&apos;s Counter Page!</h1>
      <div className={styles.content}>
        <p>counter: {counter}</p>
        <button onClick={() => setCounter((cur) => cur + 1)}>+</button>
        <button onClick={() => setCounter((cur) => cur - 1)}>-</button>
      </div>
    </div>
  );
};

export default CounterPage;
