import mongoose from 'mongoose';

import * as config from '../config.json';

export const connectToDB = () => {
  return new Promise((resolve, reject) => {
    const dbUrl = config.database.url
        .replace('<dbuser>', config.database.user)
        .replace('<dbpassword>', config.database.password);

    mongoose.connect(dbUrl, { useNewUrlParser: true });
    const db = mongoose.connection;
    db.on('error', (err) => {
      reject(err);
    });
    db.once('open', () => {
      resolve();
    });
  });
};
