import { Router } from 'express';

import { CreateProfessionalController } from '@modules/users/useCases/createProfessional/CreateProfessionalController';
import { ListProfessionalsController } from '@modules/users/useCases/listProfessionals/ListProfessionalsController';

const professionalsRoutes = Router();

const createProfessionalController = new CreateProfessionalController();
const listProfessionalsController = new ListProfessionalsController();

professionalsRoutes.post('/', createProfessionalController.handle);

professionalsRoutes.get('/', listProfessionalsController.handle);

export { professionalsRoutes };
