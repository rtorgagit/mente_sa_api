import { Router } from 'express';

import { createProfessionalControler } from '../modules/users/useCases/createProfessional';
import { listProfessionalsController } from '../modules/users/useCases/listProfessionals';

const professionalsRoutes = Router();

professionalsRoutes.post('/', (request, response) => {
  return createProfessionalControler.handle(request, response);
});

professionalsRoutes.get('/', (request, response) => {
  return listProfessionalsController.handle(request, response);
});

export { professionalsRoutes };
