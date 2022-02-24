import express from 'express';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';
import Routes from './routes/routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', Routes);

app.listen(port, () => {
  process.stdout.write(`App listening at => http://localhost:${port} \n`);
});
