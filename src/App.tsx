import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { ThemeProvider, GlobalStyle, theme } from './styles/GlobalStyles';
import { BetStatus, Fixture } from './types';
interface FixtureStyleProps {
  color: string;
}

const FixtureContainer = styled.article<FixtureStyleProps>`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: ${({ theme }) => theme.color.fixture};
  border-radius: 1rem;
  max-width: var(--content-max-width);
  margin: 0 auto var(--v-spacing);
  border: solid 0.1rem ${({ color }) => color};
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 2.5rem;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
  img {
    width: auto;
    height: 5.2rem;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
      height: 6.8rem;
    }
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
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
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

const getColorForStatus = (status: BetStatus): string => {
  switch (status) {
    case BetStatus.Winning:
      return theme.color.winning;
    case BetStatus.Drawing:
      return theme.color.drawing;
    case BetStatus.Losing:
      return theme.color.losing;
    default:
      return theme.color.fixture;
  }
};

const Fixture_ = ({ score, status, time, homeBadge, awayBadge }: Fixture): JSX.Element => {
  const { home, away } = score;
  return (
    <FixtureContainer color={getColorForStatus(status)}>
      <img src={homeBadge} />
      <ScoreContainer>
        <Score color={getColorForStatus(status)}>
          {home} - {away}
        </Score>
        <Time>
          {time}
          <span>&apos;</span>
        </Time>
      </ScoreContainer>
      <img src={awayBadge} />
    </FixtureContainer>
  );
};

function App(): JSX.Element {
  const [scores, setScores] = useState<Fixture[]>();
  useEffect(() => {
    fetch('/api/scores')
      .then(function (response) {
        // Examine the text in the response
        response.json().then(function (data) {
          setScores(data);
        });
      })
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      });
  }, []);

  return (
    <ThemeProvider>
      <>
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
              {/* <div>
                <h2 className={'winning'}>Winning</h2>
                {scores
                  .filter((score) => score.status === BetStatus.Winning)
                  .map((score, index) => (
                    <Fixture
                      homeBadge={score.homeBadge}
                      awayBadge={score.awayBadge}
                      key={index}
                      score={score.score}
                      status={score.status}
                      time={score.time}
                    />
                  ))}
              </div>
              <div>
                <h2 className={'drawing'}>Drawing</h2>
                {scores
                  .filter((score) => score.status === BetStatus.Drawing)
                  .map((score, index) => (
                    <Fixture
                      homeBadge={score.homeBadge}
                      awayBadge={score.awayBadge}
                      key={index}
                      score={score.score}
                      status={score.status}
                      time={score.time}
                    />
                  ))}
              </div>
              <div>
                <h2 className={'losing'}>Losing</h2>
                {scores
                  .filter((score) => score.status === BetStatus.Losing)
                  .map((score, index) => (
                    <Fixture
                      homeBadge={score.homeBadge}
                      awayBadge={score.awayBadge}
                      key={index}
                      score={score.score}
                      status={score.status}
                      time={score.time}
                    />
                  ))}
              </div> */}
            </>
          ) : (
            <p>Loading...</p>
          )}
        </main>
      </>
    </ThemeProvider>
  );
}

export default App;
