import { BetStatus } from './BetStatus';

export interface Fixture {
  score: {
    home: number;
    away: number;
  };
  status: BetStatus;
  time: number;
  homeBadge: any;
  awayBadge: any;
}
