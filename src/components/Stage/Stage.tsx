import React from 'react';
import { BetStatus } from '../../types/BetStatus';
import { Fixture } from '../../types/Fixture';
import { FixtureList } from '../FixtureList/FixtureList';
import { Centered, Grid, Column } from '../Layout/Layout';

interface StageProps {
  scores: {
    finishedGames: Fixture[];
    inPlayOrPending: Fixture[];
  };
}

export const Stage = ({ scores }: StageProps): JSX.Element => {
  const gamesInPlay = scores.inPlayOrPending.some((score) => score.betStatus !== BetStatus.Pending);
  console.log({ gamesInPlay });
  return (
    <main>
      {gamesInPlay ? (
        <>
          <h2 className="h1">In Play</h2>
          <Column>
            <>
              <h2 className={'winning'}>Winning</h2>
              <FixtureList scores={scores.inPlayOrPending.filter((score) => score.betStatus === BetStatus.Winning)} />
            </>
          </Column>
          <Column>
            <>
              <h2 className={'losing'}>Losing</h2>
              <FixtureList
                scores={scores.inPlayOrPending.filter(
                  (score) => score.betStatus !== BetStatus.Winning && score.betStatus !== BetStatus.Pending
                )}
              />
            </>
          </Column>
        </>
      ) : null}
      <h2 className="h1">Settled</h2>
      <Column>
        <>
          <h2 className={'winning'}>Won</h2>
          <FixtureList scores={scores.finishedGames.filter((score) => score.betStatus === BetStatus.Winning)} />
        </>
      </Column>
      <Column>
        <>
          <h2 className={'losing'}>Lost</h2>
          <FixtureList
            scores={scores.finishedGames.filter(
              (score) => score.betStatus !== BetStatus.Winning && score.betStatus !== BetStatus.Pending
            )}
          />
        </>
      </Column>
      <Centered>
        <h2 className={'drawing'}>Pending</h2>
        <Grid>
          <FixtureList scores={scores.inPlayOrPending.filter((score) => score.betStatus === BetStatus.Pending)} />
        </Grid>
      </Centered>
    </main>
  );
};
