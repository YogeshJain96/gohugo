import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Status</code> Page PoC.
        </p>
        <a
          className="App-link"
          href="https://yogeshjain96.github.io/gohugo/api"
          target="_blank"
          rel="noopener noreferrer"
        >
          APIs
        </a>
      </header>
    </div>
  );
}

export default App;
