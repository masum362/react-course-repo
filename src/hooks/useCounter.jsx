import { useState } from "react";

const useCounter = ({ initValue = 0 }) => {
  const [count, setCount] = useState(initValue);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  function reset() {
   setCount(0);
  }

  return [count,increment,decrement,reset]
};

export default useCounter;
