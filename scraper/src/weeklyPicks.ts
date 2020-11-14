import { BetPick } from '../../src/types/BetPick';
import { Players } from '../../src/types/Players';

export interface Bet {
  id: string;
  pick: BetPick;
  playerName: Players;
}

export const WEEKLY_PICKS: Bet[] = [
  {
    id: 'g_1_EosHfHbl',
    pick: BetPick.HomeWin,
    playerName: Players.Dave,
  },
  {
    id: 'g_1_8nFqDPEF',
    pick: BetPick.HomeWin,
    playerName: Players.Tom,
  },
  {
    id: 'g_1_vHQtg4Nq',
    pick: BetPick.HomeWin,
    playerName: Players.Dean,
  },
  {
    id: 'g_1_0AXgJrie',
    pick: BetPick.HomeWin,
    playerName: Players.Kong,
  },
  {
    id: 'g_1_UeGuE5a9',
    pick: BetPick.AwayWin,
    playerName: Players.Bowers,
  },
  {
    id: 'g_1_lzUkKOyk',
    pick: BetPick.AwayWin,
    playerName: Players.Elliot,
  },
  {
    id: 'g_1_jgPjpw03',
    pick: BetPick.AwayWin,
    playerName: Players.Kie,
  },
  {
    id: 'g_1_ln8XFRUd',
    pick: BetPick.HomeWin,
    playerName: Players.Martin,
  },
  {
    id: 'g_1_MPL2HML7',
    pick: BetPick.HomeWin,
    playerName: Players.Jamie,
  },
  {
    id: 'g_1_OI7qdhcL',
    pick: BetPick.HomeWin,
    playerName: Players.Joe,
  },
];
