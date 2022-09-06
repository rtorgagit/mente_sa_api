import { Router } from 'express';

import createPatientController from '../modules/users/useCases/createPatient';
import listPatientsController from '../modules/users/useCases/listPatients';

const patientRoutes = Router();

patientRoutes.post('/', (request, response) => {
  return createPatientController().handle(request, response);
});

patientRoutes.get('/', (request, response) => {
  return listPatientsController().handle(request, response);
});

export { patientRoutes };
