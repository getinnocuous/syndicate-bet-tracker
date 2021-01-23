import { BetPick } from '../../src/types/BetPick';
import { Players } from '../../src/types/Players';

export interface Bet {
  id: string;
  pick: BetPick;
  playerName: Players;
}

export const WEEKLY_PICKS: Bet[] = [
  {
    id: 'g_1_KSVJ60rT',
    pick: BetPick.HomeWin,
    playerName: Players.Ben,
  },
  {
    id: 'g_1_G0UI4heo',
    pick: BetPick.HomeWin,
    playerName: Players.Tom,
  },
  {
    id: 'g_1_YBT792bA',
    pick: BetPick.HomeWin,
    playerName: Players.Martin,
  },
  {
    id: 'g_1_hzuU9iaU',
    pick: BetPick.AwayWin,
    playerName: Players.Kong,
  },
  {
    id: 'g_1_rVtwpiA4',
    pick: BetPick.HomeWin,
    playerName: Players.Dean,
  },
  {
    id: 'g_1_Aq3c8erd',
    pick: BetPick.HomeWin,
    playerName: Players.Elliot,
  },
  {
    id: 'g_1_29QwGmGS',
    pick: BetPick.HomeWin,
    playerName: Players.Kie,
  },
  {
    id: 'g_1_4WyiDpao',
    pick: BetPick.HomeWin,
    playerName: Players.Terry,
  },
  {
    id: 'g_1_xOxCzVJO',
    pick: BetPick.AwayWin,
    playerName: Players.Bowers,
  },
  {
    id: 'g_1_UXZGoxpM',
    pick: BetPick.AwayWin,
    playerName: Players.Dave,
  },
];
