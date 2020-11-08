import express from 'express';
import bodyParser from 'body-parser';
import cron from 'node-cron';
import fs from 'fs';
import { prettyTime } from './utils/prettyTime';
import { scrapeScores } from './functions/scrapeScores';
import { appRouter } from './routes/routes';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

appRouter(app, fs);

const server = app.listen(3001, () => {
  // Schedule tasks to be run on the server.
  scrapeScores().then(() => console.log('SCRAPED AT LAUNCH'));
  cron.schedule('* * * * *', function () {
    scrapeScores().then(() => console.log(`SCRAPED AT ${prettyTime()}`));
  });
});
