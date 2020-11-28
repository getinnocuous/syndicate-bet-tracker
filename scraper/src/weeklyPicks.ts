import { BetPick } from '../../src/types/BetPick';
import { Players } from '../../src/types/Players';

export interface Bet {
  id: string;
  pick: BetPick;
  playerName: Players;
}

export const WEEKLY_PICKS: Bet[] = [
  {
    id: 'g_1_Qq3TT8eO',
    pick: BetPick.HomeWin,
    playerName: Players.Dave,
  },
  {
    id: 'g_1_OCCxwlH6',
    pick: BetPick.AwayWin,
    playerName: Players.Tom,
  },
  {
    id: 'g_1_x8vsW2WE',
    pick: BetPick.AwayWin,
    playerName: Players.Dean,
  },
  {
    id: 'g_1_jujwGICS',
    pick: BetPick.HomeWin,
    playerName: Players.Kong,
  },
  {
    id: 'g_1_juY0uWK7',
    pick: BetPick.HomeWin,
    playerName: Players.Martin,
  },
  {
    id: 'g_1_n71HAZ1N',
    pick: BetPick.HomeWin,
    playerName: Players.Elliot,
  },
  {
    id: 'g_1_vN5Ty1Gc',
    pick: BetPick.AwayWin,
    playerName: Players.Kie,
  },
  {
    id: 'g_1_ULkhRhTk',
    pick: BetPick.HomeWin,
    playerName: Players.Terry,
  },
  {
    id: 'g_1_Io0weMxh',
    pick: BetPick.HomeWin,
    playerName: Players.Ben,
  },
  {
    id: 'g_1_QH6TkMQt',
    pick: BetPick.HomeWin,
    playerName: Players.Bowers,
  },
];
