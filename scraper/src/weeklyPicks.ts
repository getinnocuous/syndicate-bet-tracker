import { BetPick } from '../../src/types/BetPick';
import { Players } from '../../src/types/Players';

export interface Bet {
  id: string;
  pick: BetPick;
  playerName: Players;
}

export const WEEKLY_PICKS: Bet[] = [
  {
    id: 'g_1_xOWonjBh',
    pick: BetPick.HomeWin,
    playerName: Players.Dave,
  },
  {
    id: 'g_1_jiK8hjqn',
    pick: BetPick.HomeWin,
    playerName: Players.Tom,
  },
  {
    id: 'g_1_jRnkXxVS',
    pick: BetPick.HomeWin,
    playerName: Players.Dean,
  },
  {
    id: 'g_1_fassmWen',
    pick: BetPick.AwayWin,
    playerName: Players.Kong,
  },
  {
    id: 'g_1_dSXesQzo',
    pick: BetPick.HomeWin,
    playerName: Players.Martin,
  },
  {
    id: 'g_1_EuUut3BI',
    pick: BetPick.HomeWin,
    playerName: Players.Elliot,
  },
  // {
  //   id: '',
  //   pick: BetPick.AwayWin,
  //   playerName: Players.Kie,
  // },
  {
    id: 'g_1_SOiYtMmS',
    pick: BetPick.AwayWin,
    playerName: Players.Terry,
  },
  // {
  //   id: '',
  //   pick: BetPick.HomeWin,
  //   playerName: Players.Ben,
  // },
  // {
  //   id: '',
  //   pick: BetPick.HomeWin,
  //   playerName: Players.Macca,
  // },
];
