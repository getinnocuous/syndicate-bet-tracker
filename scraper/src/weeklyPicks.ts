import { BetPick } from '../../src/types/BetPick';
import { Players } from '../../src/types/Players';

export interface Bet {
  id: string;
  pick: BetPick;
  playerName: Players;
}

export const WEEKLY_PICKS: Bet[] = [
  {
    id: 'g_1_WfoS24f1',
    pick: BetPick.HomeWin,
    playerName: Players.Ben,
  },
  {
    id: 'g_1_KUrmAEXN',
    pick: BetPick.AwayWin,
    playerName: Players.Tom,
  },
  {
    id: 'g_1_2LtO3pue',
    pick: BetPick.HomeWin,
    playerName: Players.Martin,
  },
  {
    id: 'g_1_SjO97cbN',
    pick: BetPick.AwayWin,
    playerName: Players.Kong,
  },
  {
    id: 'g_1_Ikjn8aWt',
    pick: BetPick.HomeWin,
    playerName: Players.Dean,
  },
  {
    id: 'g_1_KItHrous',
    pick: BetPick.AwayWin,
    playerName: Players.Elliot,
  },
  {
    id: 'g_1_lbYXv3v6',
    pick: BetPick.AwayWin,
    playerName: Players.Kie,
  },
  {
    id: 'g_1_z5q9Uoab',
    pick: BetPick.AwayWin,
    playerName: Players.Terry,
  },
  {
    id: 'g_1_Gr5i5cGa',
    pick: BetPick.HomeWin,
    playerName: Players.Bowers,
  },
  {
    id: 'g_1_S22I7Oio',
    pick: BetPick.AwayWin,
    playerName: Players.Macca,
  },
];
