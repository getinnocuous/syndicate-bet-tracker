import { BetPick } from './BetPick';
import { BetStatus } from './BetStatus';

export interface Fixture {
  id?: string;
  home: {
    name: string;
    homeGoals: number;
  };
  away: {
    name: string;
    awayGoals: number;
  };
  kickOff: string;
  currentTime: string;
  pick?: BetPick;
  betStatus?: BetStatus;
}
