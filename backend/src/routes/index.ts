import express from 'express';
import indexRouter from './index.routes';

const apiRouter = express.Router();

apiRouter.use(indexRouter);

export default apiRouter;