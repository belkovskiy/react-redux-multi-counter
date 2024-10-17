import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCounter } from './features/counters/countersSlice';
import { RootState } from './app/store';
import Counter from './components/Counter';

const App: React.FC = () => {

  const dispatch = useDispatch();
  const counters = useSelector((state: RootState) => state.counters.counters);
  return (
    <div className="App">
      <h1>Counters</h1>
      <button onClick={() => dispatch(addCounter())}>
        Add Counter
      </button>
      {counters.map(counter => (
        <Counter key={counter.id} id={counter.id} value={counter.value} />
      ))
      }
    </div>
  );
}

export default App;
