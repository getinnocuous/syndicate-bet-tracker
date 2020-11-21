import { BetPick } from '../../src/types/BetPick';
import { Players } from '../../src/types/Players';

export interface Bet {
  id: string;
  pick: BetPick;
  playerName: Players;
}

export const WEEKLY_PICKS: Bet[] = [
  {
    id: 'g_1_xfVQLyDg',
    pick: BetPick.AwayWin,
    playerName: Players.Dave,
  },
  {
    id: 'g_1_ddoSJFs6',
    pick: BetPick.HomeWin,
    playerName: Players.Tom,
  },
  {
    id: 'g_1_nsUog8H6',
    pick: BetPick.HomeWin,
    playerName: Players.Dean,
  },
  {
    id: 'g_1_rRYXjZcD',
    pick: BetPick.HomeWin,
    playerName: Players.Kong,
  },
  {
    id: 'g_1_rDmvHDRO',
    pick: BetPick.HomeWin,
    playerName: Players.Martin,
  },
  {
    id: 'g_1_CIMPCVxN',
    pick: BetPick.HomeWin,
    playerName: Players.Elliot,
  },
  {
    id: 'g_1_fu3Xkuu9',
    pick: BetPick.HomeWin,
    playerName: Players.Kie,
  },
  {
    id: 'g_1_zVSfT2JS',
    pick: BetPick.HomeWin,
    playerName: Players.Terry,
  },
  {
    id: 'g_1_h6wjUr4M',
    pick: BetPick.AwayWin,
    playerName: Players.Jamie,
  },
  {
    id: 'g_1_6DavxcEF',
    pick: BetPick.HomeWin,
    playerName: Players.Bowers,
  },
];
