import { useState } from 'react';
import './App.css';

function App() {
  let [counter, setCounter] = useState(0);

  const addCounter = () => {
    setCounter(++counter);
  }

  const removeCounter = () => {
    setCounter(--counter);
  }

  return (
    <>
    <h1 className='bg-green-400'>{counter}</h1>
    <button onClick={addCounter}>Add Counter</button>
    <button onClick={removeCounter}>Remove Counter</button>
    </>
  );
}

export default App;
