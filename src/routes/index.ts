import { Router } from 'express';

import { pacientRoutes } from './patients.routes';
import { professionalsRoutes } from './professionals.routes';

const router = Router();

router.use('/professionals', professionalsRoutes);
router.use('/pacients', pacientRoutes);

export { router };
