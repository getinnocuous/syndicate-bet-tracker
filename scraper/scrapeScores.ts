import puppeteer from 'puppeteer';
import { exportScores } from './exportScores';
import { BetPick } from '../src/types/BetPick';
import { BetStatus } from '../src/types/BetStatus';
import { Fixture } from './../src/types/Fixture';

const siteUrl = 'https://www.flashscore.co.uk/';

interface Bet {
  id: string;
  pick: BetPick;
}

const WEEKLY_PICKS: Bet[] = [
  {
    id: 'g_1_Ao6VwJq3',
    pick: BetPick.AwayWin,
  },
  {
    id: 'g_1_4lFuHexj',
    pick: BetPick.HomeWin,
  },
  {
    id: 'g_1_ruEqGFid',
    pick: BetPick.Draw,
  },
  {
    id: 'g_1_drtdPJU9',
    pick: BetPick.HomeWin,
  },
  {
    id: 'g_1_K6jPURmb',
    pick: BetPick.HomeWin,
  },
  {
    id: 'g_1_EmCtKAZu',
    pick: BetPick.HomeWin,
  },
  {
    id: 'g_1_KKVcqR2i',
    pick: BetPick.HomeWin,
  },
  {
    id: 'g_1_nw4gH8Jb',
    pick: BetPick.HomeWin,
  },
  {
    id: 'g_1_2TEzOJzE',
    pick: BetPick.HomeWin,
  },
  {
    id: 'g_1_ph0ECpYT',
    pick: BetPick.HomeWin,
  },
  {
    id: 'g_1_YV7IFerf',
    pick: BetPick.HomeWin,
  },
  {
    id: 'g_1_fPrxSPXG',
    pick: BetPick.HomeWin,
  },
  {
    id: 'g_1_bBU1roIc',
    pick: BetPick.HomeWin,
  },
  {
    id: 'g_1_n1nt84to',
    pick: BetPick.HomeWin,
  },
];

const checkBetStatus = (betPick: BetPick, homeGoals: number, awayGoals: number): BetStatus => {
  if (homeGoals === null && awayGoals === null) {
    return BetStatus.Pending;
  }
  switch (betPick) {
    case BetPick.HomeWin:
      if (homeGoals > awayGoals) {
        return BetStatus.Winning;
      } else {
        return BetStatus.Losing;
      }
    case BetPick.Draw:
      if (homeGoals === awayGoals) {
        return BetStatus.Winning;
      } else {
        return BetStatus.Losing;
      }
    case BetPick.AwayWin:
      if (homeGoals < awayGoals) {
        return BetStatus.Winning;
      } else {
        return BetStatus.Losing;
      }
    default:
      return BetStatus.Pending;
  }
};

export const scrapeScores = async (): Promise<void> => {
  let browser;

  try {
    browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(siteUrl); // Add the URL you want to fetch
    await page.waitForSelector(`#${WEEKLY_PICKS[0].id}`, {
      timeout: 15000,
    });

    const scrapedPage = await page.evaluate((ids) => {
      return ids.map(({ id, pick }: Bet) => {
        const home = $(`#${id} .event__participant--home`).text();
        const away = $(`#${id} .event__participant--away`).text();
        const kickOff = $(`#${id} .event__time`).text() || null;
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

    const scores = scrapedPage.map((fixture) => {
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
