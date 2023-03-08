import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// function App() { = ligne 5
const App = () => {
  const [counter, setCounter] = useState(0); // 0 = default value, could be anything (int, string etc)
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        {/* ... */}
        <p>Currently at {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
      </header>
    </div>
  );
}

export default App;
