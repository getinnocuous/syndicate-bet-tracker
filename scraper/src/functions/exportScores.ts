import fs from 'fs';
import { Fixture } from '../../../src/types/Fixture';

interface Scores {
  finishedGames: Fixture[];
  inPlayOrPending: Fixture[];
}

export const exportScores = async (results: Scores): Promise<void> => {
  const jsonString = JSON.stringify(results);
  fs.writeFileSync('scores.json', jsonString, 'utf-8');
};
