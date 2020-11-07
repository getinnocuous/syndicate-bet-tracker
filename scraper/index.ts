import express from 'express';
import { scrapeScores } from './scrapeScores';
import { appRouter } from './routes/routes';
import bodyParser from 'body-parser';
import cron from 'node-cron';
import fs from 'fs';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

appRouter(app, fs);

const server = app.listen(3001, () => {
  // Schedule tasks to be run on the server.
  scrapeScores().then(() => console.log('SCRAPED AT LAUNCH'));

  cron.schedule('* * * * *', function () {
    // console.log('running a task every minute');
    scrapeScores().then(() => console.log('scraped'));
  });
});
