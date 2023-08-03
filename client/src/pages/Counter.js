import './Counter.css';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0)

  let increase = () => {
    setCount(count + 1)
  };

  let decrease = () => {
    setCount(count - 1)
  };

  return (
    <div className="counter">
      <button className="increase" onClick={increase}>Increase</button>
      <p>{count}</p>
      <button className="decrease" onClick={decrease}>Decrease</button>
    </div>
  );
}
