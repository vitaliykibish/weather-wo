import express from 'express';
import path from 'path';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import weatherRouter from './routes/weather/index.js';
import forecastRouter from './routes/forecast/index.js';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(morgan('combined'));
app.use(helmet());
app.use(cors());

app.use(weatherRouter);
app.use(forecastRouter);

app.listen(PORT);

export default app;
