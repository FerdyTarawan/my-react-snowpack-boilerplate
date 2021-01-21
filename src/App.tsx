import React, { useState, useEffect } from 'react';
import { Router, RouteComponentProps } from "@reach/router"
import { Button } from '@chakra-ui/react'
import { useStore } from '@app/hooks'
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

  const { bears, increase } = useStore()

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
          Bear Count: <code>{bears}</code>.
        </p>
        <Button onClick={() => increase(1)}>Increase Bear Count</Button>
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

const NotFound: React.FC<AppProps> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>404 Route does not exist</h1>
      </header>
    </div>
  )
}

const App: React.FC = () => {
  return (
    <Router>
      <NotFound default />
      <Home path="/" />
    </Router>
  )
}

export default App;
