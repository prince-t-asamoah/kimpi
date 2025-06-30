import express from 'express';
import indexRouter from './index.routes.js';

const apiRouter = express.Router();

apiRouter.use(indexRouter);

export default apiRouter;
