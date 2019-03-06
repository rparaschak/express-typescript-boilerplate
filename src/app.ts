import bodyParser from 'body-parser';
import express from 'express';
import helmet from 'helmet';

import config from './config.json';
import { connectToDB } from './helpers/connectToDB';
import { handleCustomErrors } from './helpers/customErrorHandlers';
import { handleGlobalErrors } from './helpers/globalErrorHandlers';
import menuRouter from './routers/menu';
import signupRouter from './routers/signup';
import loginRouter from './routers/login';

const app = express();

/** Middleware */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(helmet());

/** Routers */
app.use('/menu', menuRouter);
app.use('/signup', signupRouter);
app.use('/login', loginRouter);

app.use(handleCustomErrors);
app.use(handleGlobalErrors);

/** DB connection */
connectToDB()
    .then(() => {
      console.log('Connected to the DB');
      app.listen(config.appPort);
    })
    .catch((err) => {
      console.error(err);
    });
