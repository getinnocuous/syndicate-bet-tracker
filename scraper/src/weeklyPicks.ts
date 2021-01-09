import { BetPick } from '../../src/types/BetPick';
import { Players } from '../../src/types/Players';

export interface Bet {
  id: string;
  pick: BetPick;
  playerName: Players;
}

export const WEEKLY_PICKS: Bet[] = [
  {
    id: 'g_1_EyfCDYr1',
    pick: BetPick.HomeWin,
    playerName: Players.Ben,
  },
  {
    id: 'g_1_rBbGChb7',
    pick: BetPick.HomeWin,
    playerName: Players.Tom,
  },
  {
    id: 'g_1_n5trRiD0',
    pick: BetPick.AwayWin,
    playerName: Players.Jamie,
  },
  {
    id: 'g_1_UHV9etNM',
    pick: BetPick.HomeWin,
    playerName: Players.Kong,
  },
  {
    id: 'g_1_hrsvSXcf',
    pick: BetPick.HomeWin,
    playerName: Players.Dean,
  },
  {
    id: 'g_1_E7YpsKEK',
    pick: BetPick.HomeWin,
    playerName: Players.Elliot,
  },
  {
    id: 'g_1_dz0QwVd6',
    pick: BetPick.AwayWin,
    playerName: Players.Kie,
  },
  {
    id: 'g_1_8YDCW7q2',
    pick: BetPick.AwayWin,
    playerName: Players.Terry,
  },
  {
    id: 'g_1_EirzTDrl',
    pick: BetPick.AwayWin,
    playerName: Players.Bowers,
  },
  {
    id: 'g_1_Ii1bKOBi',
    pick: BetPick.AwayWin,
    playerName: Players.Macca,
  },
];
