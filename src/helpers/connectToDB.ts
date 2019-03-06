import mongoose from 'mongoose';

import * as config from '../config.json';

export const connectToDB = () => {
  return new Promise((resolve, reject) => {
    mongoose.connect(config.database.url, { useNewUrlParser: true });
    const db = mongoose.connection;
    db.on('error', (err) => {
      reject(err);
    });
    db.once('open', () => {
      resolve();
    });
  });
};
