import { teamData } from './../data/teamData';

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
