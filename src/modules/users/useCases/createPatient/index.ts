import { PatientsRepository } from '../../repositories/implementations/PatientsRepository';
import { CreatePatientController } from './CreatePatientController';
import { CreatePatientUseCase } from './CreatePatientUseCase';

export default (): CreatePatientController => {
  const patientsRepository = new PatientsRepository();
  const createPatientUseCase = new CreatePatientUseCase(patientsRepository);
  const createPatientController = new CreatePatientController(
    createPatientUseCase,
  );

  return createPatientController;
};
