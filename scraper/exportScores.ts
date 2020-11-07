import fs from 'fs';

export const exportScores = async (results) => {
  const jsonString = JSON.stringify(results);
  fs.writeFileSync('./data/scores.json', jsonString, 'utf-8');
};
