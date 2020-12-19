import { BetPick } from '../../src/types/BetPick';
import { Players } from '../../src/types/Players';

export interface Bet {
  id: string;
  pick: BetPick;
  playerName: Players;
}

export const WEEKLY_PICKS: Bet[] = [
  {
    id: 'g_1_QDxkx09i',
    pick: BetPick.HomeWin,
    playerName: Players.Ben,
  },
  {
    id: 'g_1_0SYtB0HO',
    pick: BetPick.AwayWin,
    playerName: Players.Tom,
  },
  {
    id: 'g_1_bP5iTrno',
    pick: BetPick.HomeWin,
    playerName: Players.Jamie,
  },
  {
    id: 'g_1_SjlLSzXp',
    pick: BetPick.HomeWin,
    playerName: Players.Kong,
  },
  {
    id: 'g_1_G48kTjN3',
    pick: BetPick.HomeWin,
    playerName: Players.Martin,
  },
  {
    id: 'g_1_U5T2d1mF',
    pick: BetPick.HomeWin,
    playerName: Players.Elliot,
  },
  {
    id: 'g_1_YsrmyiH6',
    pick: BetPick.HomeWin,
    playerName: Players.Kie,
  },
  {
    id: 'g_1_CSgvwDnf',
    pick: BetPick.HomeWin,
    playerName: Players.Terry,
  },
  {
    id: 'g_1_rDuem4wH',
    pick: BetPick.AwayWin,
    playerName: Players.Bowers,
  },
  {
    id: 'g_1_xxK5sG4R',
    pick: BetPick.AwayWin,
    playerName: Players.Macca,
  },
];
