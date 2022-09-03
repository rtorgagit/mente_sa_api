import { Router } from 'express';

import { PacientsRepository } from '../modules/users/repositories/implementations/PacientsRepository';
import { createPacientController } from '../modules/users/useCases/createPacient';

const pacientRoutes = Router();
const pacientsRepository = PacientsRepository.getInstance();

pacientRoutes.post('/', (request, response) => {
  return createPacientController.handle(request, response);
});

pacientRoutes.get('/', (request, response) => {
  const allPacients = pacientsRepository.list();

  response.status(200).json(allPacients);
});

export { pacientRoutes };
