import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Container, ThemeProvider, GlobalStyle } from './styles/GlobalStyles';
import { BetStatus } from './types/BetStatus';
import { Fixture } from './types/Fixture';
import { FixtureBox } from './components/FixtureBox/FixtureBox';

const Grid = styled.div`
  display: grid;
  grid-gap: var(--v-spacing) var(--h-spacing);
  margin: auto;
  max-width: var(--content-max-width);
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
    max-width: calc((var(--content-max-width) * 2) + var(--h-spacing));
  }
`;

function App(): JSX.Element {
  const [scores, setScores] = useState<Fixture[]>();
  useEffect(() => {
    fetch('/api/scores')
      .then(function (response) {
        // Examine the text in the response
        response.json().then(function (data) {
          setScores(data);
          console.log(data);
        });
      })
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      });
  }, []);

  return (
    <ThemeProvider>
      <Container>
        <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=Bungee+Inline&display=swap" rel="stylesheet" />
        </Helmet>
        <GlobalStyle />
        <header>
          <h1>In play</h1>
        </header>
        <main>
          {scores ? (
            <>
              <div>
                <h2 className={'winning'}>Winning</h2>
                {scores
                  .filter((score) => score.betStatus === BetStatus.Winning)
                  .map((score) => (
                    <FixtureBox
                      key={score.id}
                      id={score.id}
                      home={score.home}
                      away={score.away}
                      kickOff={score.kickOff}
                      currentTime={score.currentTime}
                      betStatus={score.betStatus}
                    />
                  ))}
              </div>
              <div>
                <h2 className={'losing'}>Losing</h2>
                {scores
                  .filter((score) => score.betStatus !== BetStatus.Winning && score.betStatus !== BetStatus.Pending)
                  .map((score) => (
                    <FixtureBox
                      key={score.id}
                      id={score.id}
                      home={score.home}
                      away={score.away}
                      kickOff={score.kickOff}
                      currentTime={score.currentTime}
                      betStatus={score.betStatus}
                    />
                  ))}
              </div>
              <div
                style={{
                  gridColumn: '1 / span 2',
                }}
              >
                <h2 className={'drawing'}>Pending</h2>
                <Grid>
                  {scores
                    .filter((score) => score.betStatus === BetStatus.Pending)
                    .map((score) => (
                      <FixtureBox
                        key={score.id}
                        id={score.id}
                        home={score.home}
                        away={score.away}
                        kickOff={score.kickOff}
                        currentTime={score.currentTime}
                        betStatus={score.betStatus}
                      />
                    ))}
                </Grid>
              </div>
            </>
          ) : (
            <p className="loading">Loading...</p>
          )}
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
