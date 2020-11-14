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
  // {
  //   id: '',
  //   pick: BetPick.AwayWin,
  //   playerName: Players.Kong,
  // },
  // {
  //   id: '',
  //   pick: BetPick.AwayWin,
  //   playerName: Players.Bowers,
  // },
  {
    id: 'g_1_lzUkKOyk',
    pick: BetPick.AwayWin,
    playerName: Players.Elliot,
  },
  // {
  //   id: '',
  //   pick: BetPick.AwayWin,
  //   playerName: Players.Kie,
  // },
  {
    id: 'g_1_ln8XFRUd',
    pick: BetPick.HomeWin,
    playerName: Players.Martin,
  },
  // {
  //   id: '',
  //   pick: BetPick.HomeWin,
  //   playerName: Players.Jamie,
  // },
  // {
  //   id: '',
  //   pick: BetPick.HomeWin,
  //   playerName: Players.Joe,
  // },
];
