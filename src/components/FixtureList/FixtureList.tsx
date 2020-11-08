import React from 'react';
import { Fixture } from '../../types/Fixture';
import { FixtureBox } from '../FixtureBox/FixtureBox';

interface FixtureListProps {
  scores: Fixture[];
}

export const FixtureList = ({ scores }: FixtureListProps): JSX.Element => {
  return (
    <>
      {scores.map((score: Fixture) => (
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
    </>
  );
};
