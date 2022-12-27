import { useState } from 'react';
import './App.css';
import { API_URL } from './constants.js';

function App() {
  const [name, setName] = useState('');
  const [response, setResponse] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    fetch(`${API_URL}/${name}/welcome`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setResponse(data.message);
      });
  };

  return (
    <div className="App">
      <input
        name="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleClick}>Click me</button>
      {response && <h1>{response}</h1>}
    </div>
  );
}

export default App;
