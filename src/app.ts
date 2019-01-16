import bodyParser from 'body-parser';
import errorhandler from 'errorhandler';
import express from 'express';
import helmet from 'helmet';

import * as config from './config.json';
import { handleAxiosErrors } from './helpers/axiosErrorHandler';
import { connectToDB } from './helpers/connectToDB';
import { handleCustomErrors } from './helpers/customErrorHandlers';
import menuRouter from './routers/menu';

const app = express();

/** Middleware */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(helmet());

/** Routers */
app.use('/menu', menuRouter);

app.use(handleCustomErrors);
app.use(handleAxiosErrors);


/** DB connection */
connectToDB()
    .then(() => {
      console.log('Connected to the DB');
      app.listen(config.appPort);
    })
    .catch((err) => {
      console.error(err);
    });
