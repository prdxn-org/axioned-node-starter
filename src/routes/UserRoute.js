import { Router } from 'express';
import { GetUserData } from '../controller/UserController';

const UserRoutes = Router();

UserRoutes.get('/', GetUserData);

export default UserRoutes;
