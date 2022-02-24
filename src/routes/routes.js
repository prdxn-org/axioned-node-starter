import { Router } from 'express';
import UserRoutes from './UserRoute';

const Routes = Router();

Routes.use('/user', UserRoutes);

export default Routes;
