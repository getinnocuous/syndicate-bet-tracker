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

export const FixtureBox = ({ id, home, away, kickOff, currentTime, betStatus }: Fixture): JSX.Element => {
  const homeBadge = getTeamBadge(home.name);
  const awayBadge = getTeamBadge(away.name);
  const scoreLine = `${home?.homeGoals} - ${away?.awayGoals}`;
  return (
    <FixtureContainer id={id} color={getColorForStatus(betStatus)}>
      <Badge>{homeBadge ? <img src={homeBadge} /> : <span>{home.name}</span>}</Badge>
      <ScoreContainer>
        <Score color={getColorForStatus(betStatus)}>{currentTime !== null ? scoreLine : kickOff}</Score>
        <Time>
          {currentTime !== null && currentTime.trim()}
          {currentTime === 'Finished' || currentTime === 'After Pen.' || currentTime === null ? null : (
            <span>&apos;</span>
          )}
        </Time>
      </ScoreContainer>
      <Badge>{awayBadge ? <img src={awayBadge} /> : <span>{away.name}</span>}</Badge>
    </FixtureContainer>
  );
};
