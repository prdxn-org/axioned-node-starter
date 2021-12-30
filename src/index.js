import express from 'express';

const app = express();
const port = 3000;

app.listen(port, () => {
  process.stdout(`App listening at => http://localhost:${port}`);
});
