import { BetPick } from '../../src/types/BetPick';
import { Players } from '../../src/types/Players';

export interface Bet {
  id: string;
  pick: BetPick;
  playerName: Players;
}

export const WEEKLY_PICKS: Bet[] = [
  {
    id: 'g_1_QqiLV7Yi',
    pick: BetPick.AwayWin,
    playerName: Players.Elliot,
  },
  {
    id: 'g_1_6Nj3C2AM',
    pick: BetPick.AwayWin,
    playerName: Players.Elliot,
  },
];
