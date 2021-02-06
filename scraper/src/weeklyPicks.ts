import { BetPick } from '../../src/types/BetPick';
import { Players } from '../../src/types/Players';

export interface Bet {
  id: string;
  pick: BetPick;
  playerName: Players;
}

export const WEEKLY_PICKS: Bet[] = [
  {
    id: 'g_1_UNGaKMhl',
    pick: BetPick.HomeWin,
    playerName: Players.Ben,
  },
  {
    id: 'g_1_bFf9rTfm',
    pick: BetPick.HomeWin,
    playerName: Players.Tom,
  },
  {
    id: 'g_1_veu1x2sk',
    pick: BetPick.AwayWin,
    playerName: Players.Martin,
  },
  {
    id: 'g_1_tI8wV9Qm',
    pick: BetPick.HomeWin,
    playerName: Players.Kong,
  },
  {
    id: 'g_1_jXNOejrA',
    pick: BetPick.AwayWin,
    playerName: Players.Dean,
  },
  {
    id: 'g_1_QqJArHlE',
    pick: BetPick.AwayWin,
    playerName: Players.Joe,
  },
  {
    id: 'g_1_Iov5yMde',
    pick: BetPick.AwayWin,
    playerName: Players.Kie,
  },
  {
    id: 'g_1_lfbpKsLT',
    pick: BetPick.AwayWin,
    playerName: Players.Elliot,
  },
  {
    id: 'g_1_KOe5q9us',
    pick: BetPick.HomeWin,
    playerName: Players.Bowers,
  },
  {
    id: 'g_1_K87sUTuf',
    pick: BetPick.AwayWin,
    playerName: Players.Dave,
  },
];
