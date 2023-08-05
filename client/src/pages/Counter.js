import './Counter.css';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1)
  };

  const decrease = () => {
    setCount(count - 1)
  };

  const double = () => {
    setCount(count * 2)
  };

  const divDouble = () => {
    setCount(count / 2)
  }

  return (
    <div className="counter">
      <button onClick={double}>x2</button>
      <button className="increase" onClick={increase}>Increase</button>
      <p>{count}</p>
      <button className="decrease" onClick={decrease}>Decrease</button>
      <button onClick={divDouble}>/2</button>
    </div>
  );
}
