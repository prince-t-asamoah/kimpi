import express from 'express';

const indexRouter = express.Router();

indexRouter.get('/', (_, res) => {
  res.render('index', {
    appName: process.env.APP_NAME || 'REST API',
    appVersion: process.env.APP_VERSION || '0.0.0',
    appDescription: process.env.APP_DESCRIPTION || 'A REST API',
    appAuthor: process.env.APP_AUTHOR || 'Unknown',
    status: 'running',
    timeStamp: new Date().toISOString(),
    currentYear: new Date().getFullYear(),
  });
});

export default indexRouter;
