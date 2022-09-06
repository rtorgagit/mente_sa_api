import { Router } from 'express';

import { authenticateRoutes } from './authenticate.routes';
import { patientsRoutes } from './patients.routes';
import { professionalsRoutes } from './professionals.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use(authenticateRoutes);
router.use('/professionals', professionalsRoutes);
router.use('/patients', patientsRoutes);
router.use('/users', usersRoutes);

export { router };
