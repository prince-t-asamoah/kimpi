import express from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import morgan from 'morgan';
import apisRouter from './routes/index.js';
import logger from './utils/logger.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (_, res) => res.redirect('/api/v1'));
app.use('/api/v1', apisRouter);

app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});

export default app;
