import React from 'react';
import styled from 'styled-components';
import { Fixture } from '../../types/Fixture';
import { getColorForStatus, getTeamBadge } from '../../utils/utils';

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
  width: 100%;
  margin: 0 auto;
  max-width: var(--content-max-width);
  border: solid 0.1rem ${({ color }) => color};
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
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
    font-size: 1.2rem;
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

const Player = styled.span`
  font-size: 1rem;
  margin-top: 0.2rem;
  text-align: center;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: 0.4rem;
    margin-bottom: -0.4rem;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1.2rem;
    margin-top: 1.2rem;
    margin-bottom: -1.2rem;
  }
`;

export const FixtureBox = ({
  id,
  home,
  away,
  kickOff,
  currentTime,
  pick,
  betStatus,
  playerName,
}: Fixture): JSX.Element => {
  const homeBadge = getTeamBadge(home.name);
  const awayBadge = getTeamBadge(away.name);
  const scoreLine = `${home?.homeGoals} - ${away?.awayGoals}`;
  console.log({ pick });
  return (
    <FixtureContainer id={id} color={getColorForStatus(betStatus)}>
      <Badge>{homeBadge ? <img src={homeBadge} /> : <span>{home.name}</span>}</Badge>
      <ScoreContainer>
        <Score color={getColorForStatus(betStatus)}>{currentTime !== null ? scoreLine : kickOff}</Score>
        <Time>
          {currentTime !== null && currentTime !== 'Finished' ? currentTime.trim() : null}
          {currentTime === 'Finished' ||
          currentTime === 'After Pen.' ||
          currentTime === 'After ET' ||
          currentTime === 'Half Time' ||
          currentTime === null ? null : (
            <span>&apos;</span>
          )}
        </Time>
        <Player>
          {playerName} - {pick}
        </Player>
      </ScoreContainer>
      <Badge>{awayBadge ? <img src={awayBadge} /> : <span>{away.name}</span>}</Badge>
    </FixtureContainer>
  );
};
