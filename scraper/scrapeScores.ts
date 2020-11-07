import puppeteer from 'puppeteer';
import { exportScores } from './exportScores';
const siteUrl = 'https://www.flashscore.co.uk/';

export const scrapeScores = async () => {
  const WEEKLY_PICKS = [
    {
      id: 'g_1_MPPzIyNq',
      pick: 'draw',
    },
    // {
    //   id: 'g_1_E7Yu2xEf',
    //   pick: 'home',
    // },
    // {
    //   id: 'g_1_063hqXmr',
    //   pick: 'home',
    // },
    // {
    //   id: 'g_1_nXY8MHES',
    //   pick: 'home',
    // },
    // {
    //   id: 'g_1_KS3EGyTm',
    //   pick: 'home',
    // },
    // {
    //   id: 'g_1_Sh7MEFc0',
    //   pick: 'home',
    // },
    // {
    //   id: 'g_1_2BaZBDsJ',
    //   pick: 'home',
    // },
    // {
    //   id: 'g_1_tMMLlgQK',
    //   pick: 'home',
    // },
  ];
  let browser;

  try {
    browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(siteUrl); // Add the URL you want to fetch
    await page.waitForSelector(`#${WEEKLY_PICKS[0].id}`, {
      timeout: 15000,
    });

    const body = await page.evaluate((ids) => {
      const checkBetStatus = (betPick, homeGoals, awayGoals) => {
        if (homeGoals === awayGoals && betPick === 'draw') {
          return 'winning';
        }
        if (homeGoals === awayGoals && betPick !== 'draw') {
          return 'drawing';
        }
        if (homeGoals > awayGoals && betPick === 'home') {
          return 'winning';
        }
        if (homeGoals < awayGoals && betPick === 'away') {
          return 'winning';
        }
        if (homeGoals > awayGoals && betPick !== 'home') {
          return 'losing';
        }
        if (homeGoals < awayGoals && betPick !== 'home') {
          return 'losing';
        }
      };

      return ids.map(({ id, pick }) => {
        const home = $(`#${id} .event__participant--home`).text();
        const away = $(`#${id} .event__participant--away`).text();
        const kickOff = $(`#${id} .event__time`).text() || null;
        const currentTime = parseInt($(`#${id} .event__stage .event__stage--block`).text()) || null;
        const homeGoals = parseInt($(`#${id} .event__scores span:nth-of-type(1)`).text());
        const awayGoals = parseInt($(`#${id} .event__scores span:nth-of-type(2)`).text());
        const betPick = pick;
        const betStatus = checkBetStatus(betPick, homeGoals, awayGoals);
        return {
          home: {
            home,
            homeGoals,
          },
          away: {
            away,
            awayGoals,
          },
          kickOff,
          currentTime,
          pick: betPick,
          betStatus,
        };
      });
    }, WEEKLY_PICKS);
    exportScores(body);
  } catch (e) {
    console.log(e);
  } finally {
    await browser.close();
  }
};
