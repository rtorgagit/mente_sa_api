import { Router } from 'express';

import { ProfessionalsRepository } from '../modules/users/repositories/ProfessionalsRepository';
import { CreateProfessionalService } from '../modules/users/services/CreateProfessionalService';

const professionalsRoutes = Router();
const professionalsRepository = new ProfessionalsRepository();

professionalsRoutes.post('/', (request, response) => {
  const { nome, crp, abordagem, contato } = request.body;
  const createProfessionalService = new CreateProfessionalService(
    professionalsRepository,
  );

  createProfessionalService.execute({ nome, crp, abordagem, contato });

  return response.status(201).send();
});

professionalsRoutes.get('/', (request, response) => {
  const allProfessionals = professionalsRepository.list();

  response.status(200).json(allProfessionals);
});

export { professionalsRoutes };
