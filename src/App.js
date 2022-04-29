import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';
import axios from 'axios'
function App() {
  useEffect( () => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=9270421e43cc32ed6056cad8de3c2c67&language=en-US&page=1')
        .then((res) => console.log(res))
        .catch(err => console.log(err))
        
}, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
