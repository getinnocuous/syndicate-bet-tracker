import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { ThemeProvider, GlobalStyle, theme } from './styles/GlobalStyles';
import MUFC from './images/manchester_united.png';
import MCFC from './images/manchester_city.png';
import FFC from './images/fulham.png';
import CPFC from './images/crystal_palace.png';
import MKDNS from './images/milton_keynes_dons.png';
import QPR from './images/queens_park_rangers.png';
import SPURS from './images/tottenham_hotspur.png';
import NUFC from './images/newcastle_united.png';

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

enum BetStatus {
  Winning,
  Drawing,
  Losing,
}

interface FixtureProps {
  score: {
    home: number;
    away: number;
  };
  status: BetStatus;
  time: number;
  homeBadge: any;
  awayBadge: any;
}

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

const Fixture = ({ score, status, time, homeBadge, awayBadge }: FixtureProps): JSX.Element => {
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

const scores: FixtureProps[] = [
  {
    score: {
      home: 2,
      away: 1,
    },
    status: BetStatus.Winning,
    time: 11,
    homeBadge: MCFC,
    awayBadge: MUFC,
  },
  {
    score: {
      home: 0,
      away: 0,
    },
    status: BetStatus.Drawing,
    time: 12,
    homeBadge: FFC,
    awayBadge: CPFC,
  },
  {
    score: {
      home: 1,
      away: 0,
    },
    status: BetStatus.Winning,
    time: 12,
    homeBadge: SPURS,
    awayBadge: NUFC,
  },
  {
    score: {
      home: 0,
      away: 1,
    },
    status: BetStatus.Losing,
    time: 10,
    homeBadge: MKDNS,
    awayBadge: QPR,
  },
];

function App(): JSX.Element {
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
          <div>
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
          </div>
        </main>
      </>
    </ThemeProvider>
  );
}

export default App;
