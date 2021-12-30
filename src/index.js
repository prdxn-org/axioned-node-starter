import express from 'express';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.listen(port, () => {
  process.stdout(`App listening at => http://localhost:${port}`);
});
