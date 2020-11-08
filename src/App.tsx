import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Container, ThemeProvider, GlobalStyle } from './styles/GlobalStyles';
import { Fixture } from './types/Fixture';
import { Header } from './components/Header/Header';
import { Stage } from './components/Stage/Stage';
import { Loading } from './components/Loading/Loading';

const fetchData = (setScores: React.Dispatch<React.SetStateAction<Fixture[] | undefined>>) => {
  fetch('api/scores')
    .then((response) => response.json())
    .then((data) => {
      setScores(data);
      console.log(data);
    })
    .catch(function (err) {
      console.log('Fetch Error :-S', err);
    });
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
        </Helmet>
        <GlobalStyle />
        <Header />
        {scores ? <Stage scores={scores} /> : <Loading />}
      </Container>
    </ThemeProvider>
  );
}

export default App;
