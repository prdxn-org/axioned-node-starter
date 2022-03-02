import express from 'express';
import dotenv from 'dotenv';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import Routes from './routes/routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Axioned Node-starter repo',
    version: '1.0.0',
    description: 'Node-starter repo',
  },
  servers: [{
    url: `http://localhost:${port}`,
    description: 'Dev server',
  }],
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/v1', Routes);

app.listen(port, () => {
  process.stdout.write(`App listening at => http://localhost:${port} \n`);
});
