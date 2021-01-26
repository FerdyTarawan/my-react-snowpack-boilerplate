import { Button } from '@chakra-ui/react';
import { RouteComponentProps, Router } from '@reach/router';
import React, { Suspense, useState } from 'react';

import { useInterval, useStore, useTranslation } from '@app/hooks';

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
  const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <img alt="logo" className="App-logo" src={logo} />
        <p>{t('title')}</p>
        <p>{t('description.part1')}</p>
        <p>{t('description.part2', { time: count })}</p>
        <p>{t('description.part3', { count: bears })}</p>
        <Button onClick={() => increase(1)} variant="outline">
          {t('action.incrementBear')}
        </Button>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            {t('description.link')}
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

const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

const App: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <NotFound default />
        <Home path="/" />
      </Router>
    </Suspense>
  );
};

export default App;
