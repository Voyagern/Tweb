import logo from './download.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           Turevici Oleg Student din rupa cr-222
        </p>
        <a
          className="App-link"
          href="https://github.com/Voyagern"
          target="_blank"
          rel="noopener noreferrer"
        >
          My github
        </a>
      </header>
    </div>
  );
}

export default App;
