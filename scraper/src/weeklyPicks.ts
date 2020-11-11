import { BetPick } from '../../src/types/BetPick';
import { Players } from '../../src/types/Players';

export interface Bet {
  id: string;
  pick: BetPick;
  playerName: Players;
}

export const WEEKLY_PICKS: Bet[] = [
  {
    id: 'g_1_8IkKzVrg',
    pick: BetPick.HomeWin,
    playerName: Players.Dave,
  },
  {
    id: 'g_1_2F5X0Rdb',
    pick: BetPick.HomeWin,
    playerName: Players.Bowers,
  },
  {
    id: 'g_1_ImNSkM5f',
    pick: BetPick.HomeWin,
    playerName: Players.Elliot,
  },
  {
    id: 'g_1_vqFshXdl',
    pick: BetPick.AwayWin,
    playerName: Players.Macca,
  },
  {
    id: 'g_1_Kz8QYt4A',
    pick: BetPick.AwayWin,
    playerName: Players.Joe,
  },
  {
    id: 'g_1_YNiOhxeG',
    pick: BetPick.AwayWin,
    playerName: Players.Martin,
  },
  {
    id: 'g_1_bipCevBc',
    pick: BetPick.AwayWin,
    playerName: Players.Dean,
  },
  // {
  //   id: 'g_1_2qRhe5Dl',
  //   pick: BetPick.AwayWin,
  //   playerName: Players.Jamie,
  // },
  // {
  //   id: 'g_1_xGY4h3c7',
  //   pick: BetPick.HomeWin,
  //   playerName: Players.Kong,
  // },
];
