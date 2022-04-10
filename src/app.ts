import 'dotenv/config';
import express, { NextFunction, Request, Response } from "express";
import { Routes } from './routes/routes';
import Error from './types/Error';
const cors = require('cors');

const app = express()

app.use(express.json())
app.use(cors());


// health check route
app.get('/', (_req: Request, res: Response) => res.status(200).send('OK'));

// all routes
app.use('/', Routes);

// error handling
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  return res.status(err.status || 500).json({
    result: 'failure',
    message: err.message,
  });
});

export default app;
