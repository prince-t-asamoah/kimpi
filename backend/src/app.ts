import express from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRouter from './routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'))

app.use('/api/v1', apiRouter);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})

export default app;
