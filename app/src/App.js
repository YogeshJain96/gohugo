import './App.css';
import {useEffect, useState} from "react";

const API_URL = "https://yogeshjain96.github.io/gohugo/api/incidents";

function App() {

  const [incidents, setIncidents] = useState();

  const fetchIncidents = () => {
    return fetch(API_URL)
          .then((response) => response.json())
          .then(
            (result) => {
            console.log(result.data);
            setIncidents([...result.data]);
          });
        }

  useEffect(() => {
    fetchIncidents();
    }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <code>Status</code> Page PoC.
        </h1>
        <h3>
          List of Incidents: 
        </h3>
        <p>(<code>{API_URL}</code>)</p>
        <ul>
          {incidents && incidents.map(item => (
            <li key={item.date}>{item.name}-{item.status}</li>
          ))}
        </ul>
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
