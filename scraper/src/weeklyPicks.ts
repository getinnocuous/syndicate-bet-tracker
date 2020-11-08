import { BetPick } from '../../src/types/BetPick';
import { Players } from '../../src/types/Players';

export interface Bet {
  id: string;
  pick: BetPick;
  playerName: Players;
}

export const WEEKLY_PICKS: Bet[] = [
  {
    id: 'g_1_Ao6VwJq3',
    pick: BetPick.AwayWin,
    playerName: Players.Elliot,
  },
  {
    id: 'g_1_4lFuHexj',
    pick: BetPick.HomeWin,
    playerName: Players.Macca,
  },
  {
    id: 'g_1_ruEqGFid',
    pick: BetPick.Draw,
    playerName: Players.Dean,
  },
  {
    id: 'g_1_drtdPJU9',
    pick: BetPick.HomeWin,
    playerName: Players.Kie,
  },
];
