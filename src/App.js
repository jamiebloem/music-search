import axios from "axios";
import './App.css';
import {useState} from 'react';

function App() {
    const [query, setQuery] = useState('Coldplay');

  function fetchData(event) {
    console.log('hallo', query)
  }

  return (
      <div>
        <input value={query} onChange={event => setQuery(event.target.value)} type="search"/>
        <button onClick={fetchData}>Search</button>


      </div>
  );
}

export default App;
