import fs from 'fs';
import { Fixture } from '../../../frontend/src/types/Fixture';

export const exportScores = async (results: Fixture[]): Promise<void> => {
  const jsonString = JSON.stringify(results);
  fs.writeFileSync('scores.json', jsonString, 'utf-8');
};
