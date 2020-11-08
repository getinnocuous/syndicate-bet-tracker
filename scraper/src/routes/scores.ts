export const scores = (app, fs) => {
  // variables
  const dataPath = 'scores.json';

  // READ
  app.get('/api/scores', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.parse(data));
    });
  });
};
