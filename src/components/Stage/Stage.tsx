import React from 'react';
import { BetStatus } from '../../types/BetStatus';
import { Fixture } from '../../types/Fixture';
import { FixtureList } from '../FixtureList/FixtureList';
import { Centered, Grid } from '../Layout/Layout';

interface StageProps {
  scores: Fixture[];
}

export const Stage = ({ scores }: StageProps): JSX.Element => (
  <main>
    <div>
      <h2 className={'winning'}>Winning</h2>
      <FixtureList scores={scores.filter((score) => score.betStatus === BetStatus.Winning)} />
    </div>
    <div>
      <h2 className={'losing'}>Losing</h2>
      <FixtureList
        scores={scores.filter(
          (score) => score.betStatus !== BetStatus.Winning && score.betStatus !== BetStatus.Pending
        )}
      />
    </div>
    <Centered>
      <h2 className={'drawing'}>Pending</h2>
      <Grid>
        <FixtureList scores={scores.filter((score) => score.betStatus === BetStatus.Pending)} />
      </Grid>
    </Centered>
  </main>
);
