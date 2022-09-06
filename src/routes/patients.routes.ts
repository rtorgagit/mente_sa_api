import { Router } from 'express';

import { CreatePatientController } from '../modules/users/useCases/createPatient/CreatePatientController';
import { ListPatientsController } from '../modules/users/useCases/listPatients/ListPatientsController';

const patientRoutes = Router();

const createPatientController = new CreatePatientController();
const listPatientsController = new ListPatientsController();

patientRoutes.post('/', createPatientController.handle);

patientRoutes.get('/', listPatientsController.handle);

export { patientRoutes };
