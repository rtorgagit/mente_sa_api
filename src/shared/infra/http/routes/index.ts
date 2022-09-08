import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { authenticateRoutes } from './authenticate.routes';
import { patientsRoutes } from './patients.routes';
import { professionalsRoutes } from './professionals.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use(authenticateRoutes);
router.use('/professionals', ensureAuthenticated, professionalsRoutes);
router.use('/patients', ensureAuthenticated, patientsRoutes);
router.use('/users', usersRoutes);

export { router };
