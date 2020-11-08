import { BetPick } from '../../src/types/BetPick';

export interface Bet {
  id: string;
  pick: BetPick;
}

export const WEEKLY_PICKS: Bet[] = [
  {
    id: 'g_1_Ao6VwJq3',
    pick: BetPick.AwayWin,
  },
  {
    id: 'g_1_4lFuHexj',
    pick: BetPick.HomeWin,
  },
  {
    id: 'g_1_ruEqGFid',
    pick: BetPick.Draw,
  },
  {
    id: 'g_1_drtdPJU9',
    pick: BetPick.HomeWin,
  },
];
