import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Container, ThemeProvider, GlobalStyle } from './styles/GlobalStyles';
import { Fixture } from './types/Fixture';
import { Stage } from './components/Stage/Stage';
import { Loading } from './components/Loading/Loading';

const env = process.env['NODE_ENV'];
const isDev = env !== 'production';
const endpoint = isDev ? '/api/scores' : 'https://syndicate-bet-tracker.xyz/api/scores';

const fetchData = (setScores: React.Dispatch<React.SetStateAction<Scores | undefined>>) => {
  fetch(endpoint, {
    mode: 'cors',
  })
    .then((response) => response.json())
    .then((data) => {
      setScores(data);
    })
    .catch(function (err) {
      console.log('Fetch Error :-S', err);
    });
};

interface Scores {
  finishedGames: Fixture[];
  inPlayOrPendingGames: Fixture[];
}

function App(): JSX.Element {
  const [scores, setScores] = useState<Scores>();
  const timeInterval = 15000; // 15 seconds

  useEffect(() => {
    fetchData(setScores);

    const interval = setInterval(() => {
      fetchData(setScores);
    }, timeInterval);

    return () => clearInterval(interval);
  }, []);

  return (
    <ThemeProvider>
      <Container>
        <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=Bungee+Inline&display=swap" rel="stylesheet" />
        </Helmet>
        <GlobalStyle />
        {scores ? <Stage scores={scores} /> : <Loading />}
      </Container>
    </ThemeProvider>
  );
}

export default App;
