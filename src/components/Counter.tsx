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
      <hr />
      <h4>
        Counter: {id}
      </h4>
      <p>
        Counter Value: {value}
      </p>
      <button
        className="counters-control"
        onClick={() => dispatch(increment(id))}
      >
        +
      </button>
      <button
        className="counters-control"
        onClick={() => dispatch(decrement(id))}
      >
        -
      </button>
    </div>
  );
};

export default Counter;