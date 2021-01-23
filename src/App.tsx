import { Button } from '@chakra-ui/react';
import { RouteComponentProps, Router } from '@reach/router';
import React, { useState } from 'react';

import { useInterval, useStore } from '@app/hooks';

import logo from './logo.svg';
import './App.css';

type AppProps = RouteComponentProps;

const Home: React.FC<AppProps> = () => {
  // Create the count state.
  const [count, setCount] = useState(0);

  // Create the counter (+1 every second).
  useInterval(() => {
    setCount((count) => count + 1);
  }, 1000);

  // Zustand global state.
  const { bears, increase } = useStore();

  return (
    <div className="App">
      <header className="App-header">
        <img alt="logo" className="App-logo" src={logo} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          Page has been open for <code>{count}</code> seconds.
        </p>
        <p>
          Bear Count: <code>{bears}</code>.
        </p>
        <Button onClick={() => increase(1)} variant="outline">
          Increase Bear Count
        </Button>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
};

const NotFound: React.FC<AppProps> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>404 Route does not exist</h1>
      </header>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <NotFound default />
      <Home path="/" />
    </Router>
  );
};

export default App;
