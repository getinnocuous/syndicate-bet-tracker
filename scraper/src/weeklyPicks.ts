import { BetPick } from '../../src/types/BetPick';
import { Players } from '../../src/types/Players';

export interface Bet {
  id: string;
  pick: BetPick;
  playerName: Players;
}

export const WEEKLY_PICKS: Bet[] = [
  {
    id: 'g_1_OCYe0tW2',
    pick: BetPick.AwayWin,
    playerName: Players.Dave,
  },
  {
    id: 'g_1_fHrRtEoQ',
    pick: BetPick.AwayWin,
    playerName: Players.Tom,
  },
  {
    id: 'g_1_UBI3fXFP',
    pick: BetPick.AwayWin,
    playerName: Players.Jamie,
  },
  {
    id: 'g_1_joeFm3nc',
    pick: BetPick.HomeWin,
    playerName: Players.Kong,
  },
  {
    id: 'g_1_vJmr4R3s',
    pick: BetPick.AwayWin,
    playerName: Players.Martin,
  },
  {
    id: 'g_1_nLnYeUBK',
    pick: BetPick.HomeWin,
    playerName: Players.Elliot,
  },
  {
    id: 'g_1_hMVGm6J0',
    pick: BetPick.HomeWin,
    playerName: Players.Kie,
  },
  {
    id: 'g_1_KznCZwt2',
    pick: BetPick.AwayWin,
    playerName: Players.Terry,
  },
  {
    id: 'g_1_GEB07Df7',
    pick: BetPick.AwayWin,
    playerName: Players.Bowers,
  },
  {
    id: 'g_1_4GBLul9D',
    pick: BetPick.HomeWin,
    playerName: Players.Macca,
  },
];
