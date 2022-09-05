import { Router } from 'express';

import { PatientsRepository } from '../modules/users/repositories/implementations/PatientsRepository';
import { createPatientController } from '../modules/users/useCases/createPatient';

const patientRoutes = Router();
const patientsRepository = PatientsRepository.getInstance();

patientRoutes.post('/', (request, response) => {
  return createPatientController.handle(request, response);
});

patientRoutes.get('/', (request, response) => {
  const allPatients = patientsRepository.list();

  response.status(200).json(allPatients);
});

export { patientRoutes };
