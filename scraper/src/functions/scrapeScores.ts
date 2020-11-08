import puppeteer from 'puppeteer';
import { exportScores } from './exportScores';
import { Fixture } from '../../../src/types/Fixture';
import { Bet, WEEKLY_PICKS } from '../weeklyPicks';
import { checkBetStatus } from '../utils/checkBetStatus';

const siteUrl = 'https://www.flashscore.co.uk/';

export const scrapeScores = async (): Promise<void> => {
  let browser;

  try {
    browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    await page.goto(siteUrl); // Add the URL you want to fetch
    await page.waitForSelector(`#${WEEKLY_PICKS[0].id}`, {
      timeout: 15000,
    });

    const scrapedPage = await page.evaluate((ids) => {
      return ids.map(({ id, pick }: Bet) => {
        const home = $(`#${id} .event__participant--home`).text();
        const away = $(`#${id} .event__participant--away`).text();
        const kickOff = $(`#${id} .event__time`).text().trim() || null;
        const currentTime = $(`#${id} .event__stage .event__stage--block`).text() || null;
        const homeGoals = parseInt($(`#${id} .event__scores span:nth-of-type(1)`).text());
        const awayGoals = parseInt($(`#${id} .event__scores span:nth-of-type(2)`).text());
        const fixture: Fixture = {
          id,
          home: {
            name: home,
            homeGoals,
          },
          away: {
            name: away,
            awayGoals,
          },
          kickOff,
          currentTime,
          pick,
        };

        return fixture;
      });
    }, WEEKLY_PICKS);

    const scores: Fixture[] = scrapedPage.map((fixture) => {
      return {
        ...fixture,
        betStatus: checkBetStatus(fixture.pick, fixture.home.homeGoals, fixture.away.awayGoals),
      };
    });

    exportScores(scores);
  } catch (e) {
    console.log(e);
  } finally {
    await browser.close();
  }
};
