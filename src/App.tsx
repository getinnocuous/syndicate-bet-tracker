import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Container, ThemeProvider, GlobalStyle } from './styles/GlobalStyles';
import { Fixture } from './types/Fixture';
import { Header } from './components/Header/Header';
import { Stage } from './components/Stage/Stage';
import { Loading } from './components/Loading/Loading';

const env = process.env['NODE_ENV'];
const isDev = env !== 'production';
const endpoint = isDev ? '/api/scores' : 'https://syndicate-bet-tracker.xyz/api/scores';

const fetchData = (setScores: React.Dispatch<React.SetStateAction<Fixture[] | undefined>>) => {
  fetch(endpoint, {
    mode: 'cors',
  })
    .then((response) => response.json())
    .then((data) => {
      setScores(data);
      console.log(data);
    })
    .catch(function (err) {
      console.log('Fetch Error :-S', err);
    });
};

const og = {
  title: 'Syndicate Bet Tracker',
  description: 'Track all the bets in one place',
  image: 'https://syndicate-bet-tracker.vercel.app/og.jpg',
  url: 'https://syndicate-bet-tracker.vercel.app/',
};

function App(): JSX.Element {
  const [scores, setScores] = useState<Fixture[]>();
  const timeInterval = 15000; // 15 seconds

  useEffect(() => {
    fetchData(setScores);

    const interval = setInterval(() => {
      fetchData(setScores);
      console.log('refreshed data');
    }, timeInterval);

    return () => clearInterval(interval);
  }, []);

  return (
    <ThemeProvider>
      <Container>
        <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=Bungee+Inline&display=swap" rel="stylesheet" />
          <meta property="og:title" content={og.title} />
          <meta property="og:description" content={og.description} />
          <meta property="og:image" content={og.image} />
          <meta property="og:url" content={og.url} />
          <meta name="twitter:title" content={og.title} />
          <meta name="twitter:description" content={og.title} />
          <meta name="twitter:image" content={og.image} />
          <meta name="twitter:card" content="summary_large_image" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest"></link>
        </Helmet>
        <GlobalStyle />
        <Header />
        {scores ? <Stage scores={scores} /> : <Loading />}
      </Container>
    </ThemeProvider>
  );
}

export default App;
