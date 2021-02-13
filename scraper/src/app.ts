import express from 'express';
import bodyParser from 'body-parser';
import cron from 'node-cron';
import fs from 'fs';
import cors from 'cors';
import { prettyTime } from './utils/prettyTime';
import { scrapeScores } from './functions/scrapeScores';
import { appRouter } from './routes/routes';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

appRouter(app, fs);

const scrape = true;

const server = app.listen(3001, () => {
  // Schedule tasks to be run on the server.
  if (scrape) {
    scrapeScores().then(() => console.log('SCRAPED AT LAUNCH'));
    cron.schedule('*/30 * * * * *', function () {
      scrapeScores().then(() => console.log(`SCRAPED AT ${prettyTime()}`));
    });
  }
});
