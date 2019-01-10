import bodyParser from 'body-parser';
import errorhandler from 'errorhandler';
import express from 'express';
import helmet from 'helmet';

import { connectToDB } from './helpers/connectToDB';
import menuRouter from './routers/menu';

const app = express();

/** Middleware */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(helmet());

/** Routers */
app.use('/menu', menuRouter);

/** Error handling */
if (process.env.NODE_ENV === 'development') {
  // only use in development
  app.use(errorhandler());
}

/** DB connection */
connectToDB()
    .then(() => {
      console.log('Connected to the DB');
      app.listen(3000);
    })
    .catch((err) => {
      console.error(err);
    });
