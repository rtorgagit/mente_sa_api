import { Router } from 'express';

import { PacientsRepository } from '../modules/users/repositories/PacientsRepository';
import { CreatePacientService } from '../modules/users/services/CreatePacientService';

const pacientRoutes = Router();
const pacientsRepository = new PacientsRepository();

pacientRoutes.post('/', (request, response) => {
  const { nome, cpf, email, genero, dataNascimento } = request.body;
  const createPacientService = new CreatePacientService(pacientsRepository);

  createPacientService.execute({ nome, cpf, email, genero, dataNascimento });

  response.status(201).send();
});

pacientRoutes.get('/', (request, response) => {
  const allPacients = pacientsRepository.list();

  response.status(200).json(allPacients);
});

export { pacientRoutes };
