import { BetPick } from '../../src/types/BetPick';
import { BetStatus } from '../../src/types/BetStatus';

export const checkBetStatus = (betPick: BetPick, homeGoals: number, awayGoals: number): BetStatus => {
  if (homeGoals === null && awayGoals === null) {
    return BetStatus.Pending;
  }
  switch (betPick) {
    case BetPick.HomeWin:
      if (homeGoals > awayGoals) {
        return BetStatus.Winning;
      } else {
        return BetStatus.Losing;
      }
    case BetPick.Draw:
      if (homeGoals === awayGoals) {
        return BetStatus.Winning;
      } else {
        return BetStatus.Losing;
      }
    case BetPick.AwayWin:
      if (homeGoals < awayGoals) {
        return BetStatus.Winning;
      } else {
        return BetStatus.Losing;
      }
    default:
      return BetStatus.Pending;
  }
};
