import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCounter } from './features/counters/countersSlice';
import { RootState } from './app/store';
import Counter from './components/Counter';

const App: React.FC = () => {

  const dispatch = useDispatch();
  const counters = useSelector((state: RootState) => state.counters.counters);
  const [inputId, setInputId] = useState('');
  const [is, setId] = useState(0);
  const re = /\d/g;

  const convertIdValue = (value: string): number => {
    return Number(value.match(re)?.join('') || 1);
  }

  return (
    <div className="App">
      <h1>Counters</h1>
      <label htmlFor="counterId">
        Enter Counter ID:
      </label>
      <input name="counterId"
        type="text" id="counterId"
        placeholder="1"
        onBlur={(e) => setInputId(e.target.value)} />
      <button onClick={() =>
        dispatch(addCounter(convertIdValue(inputId)))}
      >
        Add Counter
      </button>
      {counters.map(counter => (
        <Counter
          key={counter.id}
          id={counter.id}
          value={counter.value}
        />
      ))
      }
    </div>
  );
}

export default App;
