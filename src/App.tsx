import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Container, ThemeProvider, GlobalStyle, theme } from './styles/GlobalStyles';
import { BetStatus } from './types/BetStatus';
import { Fixture } from './types/Fixture';
import { getTeamBadge } from './util/util';

interface FixtureStyleProps {
  color: string;
}

const FixtureContainer = styled.article<FixtureStyleProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: ${({ theme }) => theme.color.fixture};
  border-radius: 1rem;
  max-width: var(--content-max-width);
  margin: 0;
  border: solid 0.1rem ${({ color }) => color};
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 1.5rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: 2.5rem;
  }
`;

const Badge = styled.div`
  display: flex;
  width: 5.2rem;
  height: 5.2rem;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 6rem;
    height: 6rem;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 6.8rem;
    height: 6.8rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  span {
    display: block;
    margin: auto;
    font-size: 1.1rem;
  }
`;

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

interface ScoreStyleProps {
  color: string;
}

const Score = styled.span<ScoreStyleProps>`
  font-style: normal;
  font-weight: normal;
  font-size: 3.6rem;
  text-align: center;
  color: ${({ color }) => color};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    font-size: 4.8rem;
  }
`;

const Time = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 1.2rem;
  text-align: center;
  color: ${({ theme }) => theme.color.time};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.6rem;
  }
  span {
    animation: blinker 2s linear infinite;
    @keyframes blinker {
      50% {
        opacity: 0.4;
      }
    }
  }
`;

const getColorForStatus = (status: BetStatus | undefined): string => {
  switch (status) {
    case BetStatus.Winning:
      return theme.color.winning;
    case BetStatus.Losing:
      return theme.color.losing;
    case BetStatus.Drawing:
    case BetStatus.Pending:
    default:
      return theme.color.drawing;
  }
};

const FixtureBox = ({ id, home, away, kickOff, currentTime, betStatus }: Fixture): JSX.Element => {
  const homeBadge = getTeamBadge(home.name);
  const awayBadge = getTeamBadge(away.name);
  const scoreLine = home?.homeGoals - away?.awayGoals;
  return (
    <FixtureContainer id={id} color={getColorForStatus(betStatus)}>
      <Badge>{homeBadge ? <img src={homeBadge} /> : <span>{home.name}</span>}</Badge>
      <ScoreContainer>
        <Score color={getColorForStatus(betStatus)}>{currentTime !== null ? scoreLine : kickOff}</Score>
        <Time>
          {currentTime}
          {currentTime === 'Finished' || currentTime === 'After Pen.' || currentTime === null ? null : (
            <span>&apos;</span>
          )}
        </Time>
      </ScoreContainer>
      <Badge>{awayBadge ? <img src={awayBadge} /> : <span>{away.name}</span>}</Badge>
    </FixtureContainer>
  );
};

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
