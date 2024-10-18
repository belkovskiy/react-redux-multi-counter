import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../features/counters/countersSlice";

interface CounterProps {
  id: number;
  value: number;
}

const Counter: React.FC<CounterProps> = ({ id, value }) => {

  const dispatch = useDispatch();

  return (
    <div>
      <h3>
        Counter: {id}
      </h3>
      <p>
        Counter Value: {value}
      </p>
      <button
        onClick={() => dispatch(increment(id))}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrement(id))}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;