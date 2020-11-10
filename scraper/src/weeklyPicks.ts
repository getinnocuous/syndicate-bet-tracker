import { BetPick } from '../../src/types/BetPick';
import { Players } from '../../src/types/Players';

export interface Bet {
  id: string;
  pick: BetPick;
  playerName: Players;
}

export const WEEKLY_PICKS: Bet[] = [
  {
    id: 'g_1_2J3N9dOj',
    pick: BetPick.HomeWin,
    playerName: Players.Dave,
  },
  {
    id: 'g_1_CloEWJV3',
    pick: BetPick.HomeWin,
    playerName: Players.Bowers,
  },
  {
    id: 'g_1_4leOuQD1',
    pick: BetPick.HomeWin,
    playerName: Players.Elliot,
  },
  {
    id: 'g_1_rufSvpT7',
    pick: BetPick.AwayWin,
    playerName: Players.Macca,
  },
  {
    id: 'g_1_drrA3T58',
    pick: BetPick.AwayWin,
    playerName: Players.Joe,
  },
  {
    id: 'g_1_W0zN0RkR',
    pick: BetPick.AwayWin,
    playerName: Players.Martin,
  },
  {
    id: 'g_1_OhSldobr',
    pick: BetPick.AwayWin,
    playerName: Players.Dean,
  },
  {
    id: 'g_1_2qRhe5Dl',
    pick: BetPick.AwayWin,
    playerName: Players.Jamie,
  },
  {
    id: 'g_1_xGY4h3c7',
    pick: BetPick.HomeWin,
    playerName: Players.Kong,
  },
];
