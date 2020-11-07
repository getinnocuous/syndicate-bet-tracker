// import other routes
import { scores } from './scores';

export const appRouter = (app, fs) => {
  // default route
  app.get('/', (req, res) => {
    res.send('welcome to the development api-server');
  });

  // other routes
  scores(app, fs);
};
