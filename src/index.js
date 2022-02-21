import express from 'express';
import dotenv from 'dotenv';
import Routes from './routes/routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use('/api/v1', Routes);

app.listen(port, () => {
  process.stdout.write(`App listening at => http://localhost:${port} \n`);
});
