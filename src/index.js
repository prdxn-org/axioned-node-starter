import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.listen(port, () => {
  process.stdout.write(`App listening at => http://localhost:${port} \n`);
});
