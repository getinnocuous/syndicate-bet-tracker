import React from 'react';
import { BetStatus } from '../../types/BetStatus';
import { Fixture } from '../../types/Fixture';
import { FixtureList } from '../FixtureList/FixtureList';
import { Centered, Grid, Column } from '../Layout/Layout';

interface StageProps {
  scores: {
    finishedGames: Fixture[];
    inPlayOrPendingGames: Fixture[];
  };
}

export const Stage = ({ scores }: StageProps): JSX.Element => {
  const areBetsInPlay = scores.inPlayOrPendingGames.some((score) => score.betStatus !== BetStatus.Pending);
  const areBetsPending = scores.inPlayOrPendingGames.some((score) => score.betStatus === BetStatus.Pending);
  const anyBetsSettled = scores.finishedGames.length;
  const anyBetsWon = scores.finishedGames.some((score) => score.betStatus === BetStatus.Winning);
  const anyBetsLost = scores.finishedGames.some(
    (score) => score.betStatus !== BetStatus.Winning && score.betStatus !== BetStatus.Pending
  );
  const areBetsCurrentlyWinning = scores.inPlayOrPendingGames.some((score) => score.betStatus === BetStatus.Winning);
  const areBetsCurrentlyLosing = scores.inPlayOrPendingGames.some(
    (score) => score.betStatus !== BetStatus.Winning && score.betStatus !== BetStatus.Pending
  );

  return (
    <main>
      {areBetsInPlay ? (
        <>
          <h2 className="h1">In-Play</h2>
          <Column>
            <>
              <h2 className={'winning'}>Winning</h2>
              {areBetsCurrentlyWinning ? (
                <FixtureList
                  scores={scores.inPlayOrPendingGames.filter((score) => score.betStatus === BetStatus.Winning)}
                />
              ) : (
                <p className="status">Currently, no bets are winning 🙄</p>
              )}
            </>
          </Column>
          <Column>
            <>
              <h2 className={'losing'}>Losing</h2>
              {areBetsCurrentlyLosing ? (
                <FixtureList
                  scores={scores.inPlayOrPendingGames.filter(
                    (score) => score.betStatus !== BetStatus.Winning && score.betStatus !== BetStatus.Pending
                  )}
                />
              ) : (
                <p className="status">Currently, no bets are losing 🤞</p>
              )}
            </>
          </Column>
        </>
      ) : null}
      {anyBetsSettled && (
        <>
          <h2 className="h1">Settled</h2>
          <Column>
            <>
              <h2 className={'winning'}>Won </h2>
              {anyBetsWon ? (
                <FixtureList scores={scores.finishedGames.filter((score) => score.betStatus === BetStatus.Winning)} />
              ) : (
                <p className="status">No bets won 🙄</p>
              )}
            </>
          </Column>
          <Column>
            <>
              <h2 className={'losing'}>Lost</h2>
              {anyBetsLost ? (
                <FixtureList
                  scores={scores.finishedGames.filter(
                    (score) => score.betStatus !== BetStatus.Winning && score.betStatus !== BetStatus.Pending
                  )}
                />
              ) : (
                <p className="status">
                  No bets lost!
                  <br />
                  💵 💵 💵
                </p>
              )}
            </>
          </Column>
        </>
      )}
      {areBetsPending && (
        <Centered>
          <h2 className={'drawing'}>Pending</h2>
          <Grid>
            <FixtureList
              scores={scores.inPlayOrPendingGames.filter((score) => score.betStatus === BetStatus.Pending)}
            />
          </Grid>
        </Centered>
      )}
    </main>
  );
};
