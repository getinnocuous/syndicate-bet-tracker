import { theme } from './../styles/GlobalStyles';
import { teamData } from '../data/teamData';
import { BetStatus } from '../types/BetStatus';
export const hasKey = (object: any, key: string): boolean => !!object[key];

export const getTeamBadge = (name: string): string => {
  const validKey = hasKey(teamData, name);
  if (validKey) {
    return teamData[name].badge;
  } else {
    console.log(`no data for ${name}`);
    return '';
  }
};

export const getColorForStatus = (status: BetStatus | undefined): string => {
  switch (status) {
    case BetStatus.Winning:
      return theme.color.winning;
    case BetStatus.Losing:
      return theme.color.losing;
    case BetStatus.Drawing:
    case BetStatus.Pending:
    default:
      return theme.color.drawing;
  }
};
