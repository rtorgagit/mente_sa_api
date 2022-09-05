import { Router } from 'express';

import { patientRoutes } from './patients.routes';
import { professionalsRoutes } from './professionals.routes';

const router = Router();

router.use('/professionals', professionalsRoutes);
router.use('/patients', patientRoutes);

export { router };
