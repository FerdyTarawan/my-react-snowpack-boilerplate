import React, { useState, useEffect } from 'react';
import { Router, RouteComponentProps } from "@reach/router"
import logo from './logo.svg';
import './App.css';

interface AppProps extends RouteComponentProps {}

const Home: React.FC<AppProps> = () => {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          Page has been open for <code>{count}</code> seconds.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

const NotFound: React.FC<AppProps> = () => <h1>404 Route does not exist</h1>

const App: React.FC = () => {
  return (
    <Router>
      <NotFound default />
      <Home path="/" />
    </Router>
  )
}

export default App;
