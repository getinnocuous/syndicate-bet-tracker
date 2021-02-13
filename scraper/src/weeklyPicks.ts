import { BetPick } from '../../src/types/BetPick';
import { Players } from '../../src/types/Players';

export interface Bet {
  id: string;
  pick: BetPick;
  playerName: Players;
}

export const WEEKLY_PICKS: Bet[] = [
  {
    id: 'g_1_fTYsAt3K',
    pick: BetPick.HomeWin,
    playerName: Players.Ben,
  },
  {
    id: 'g_1_Cv2VBHjb',
    pick: BetPick.HomeWin,
    playerName: Players.Tom,
  },
  {
    id: 'g_1_fPQPmDuR',
    pick: BetPick.HomeWin,
    playerName: Players.Martin,
  },
  {
    id: 'g_1_xf3GGvhD',
    pick: BetPick.AwayWin,
    playerName: Players.Terry,
  },
  {
    id: 'g_1_6aMbgp95',
    pick: BetPick.HomeWin,
    playerName: Players.Dean,
  },
  {
    id: 'g_1_6JGALpv3',
    pick: BetPick.AwayWin,
    playerName: Players.Joe,
  },
  {
    id: 'g_1_vLjenwBD',
    pick: BetPick.HomeWin,
    playerName: Players.Jamie,
  },
  {
    id: 'g_1_h2o3vrpK',
    pick: BetPick.HomeWin,
    playerName: Players.Elliot,
  },
  {
    id: 'g_1_h4hmlat1',
    pick: BetPick.HomeWin,
    playerName: Players.Bowers,
  },
  {
    id: 'g_1_WjuVRVI7',
    pick: BetPick.HomeWin,
    playerName: Players.Dave,
  },
];
