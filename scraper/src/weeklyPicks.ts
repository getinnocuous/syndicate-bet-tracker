import { BetPick } from '../../src/types/BetPick';
import { Players } from '../../src/types/Players';

export interface Bet {
  id: string;
  pick: BetPick;
  playerName: Players;
}

export const WEEKLY_PICKS: Bet[] = [
  {
    id: 'g_1_UNM2dwEk',
    pick: BetPick.HomeWin,
    playerName: Players.Ben,
  },
  {
    id: 'g_1_lKTbxhYD',
    pick: BetPick.HomeWin,
    playerName: Players.Tom,
  },
  {
    id: 'g_1_nPMgrXDA',
    pick: BetPick.HomeWin,
    playerName: Players.Martin,
  },
  {
    id: 'g_1_6Ta3K7zb',
    pick: BetPick.HomeWin,
    playerName: Players.Kong,
  },
  {
    id: 'g_1_vg4gJ0L2',
    pick: BetPick.HomeWin,
    playerName: Players.Dean,
  },
  {
    id: 'g_1_Q921HvjF',
    pick: BetPick.HomeWin,
    playerName: Players.Jamie,
  },
  // {
  //   id: 'g_1_29QwGmGS',
  //   pick: BetPick.HomeWin,
  //   playerName: Players.Kie,
  // },
  {
    id: 'g_1_QFLcsiTG',
    pick: BetPick.AwayWin,
    playerName: Players.Terry,
  },
  {
    id: 'g_1_MDyDElt7',
    pick: BetPick.HomeWin,
    playerName: Players.Bowers,
  },
  {
    id: 'g_1_29Kvkfqo',
    pick: BetPick.AwayWin,
    playerName: Players.Dave,
  },
];
