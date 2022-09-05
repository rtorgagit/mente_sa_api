import { PatientsRepository } from '../../repositories/implementations/PatientsRepository';
import { CreatePatientController } from './CreatePatientController';
import { CreatePatientUseCase } from './CreatePatientUseCase';

const patientsRepository = PatientsRepository.getInstance();
const createPatientUseCase = new CreatePatientUseCase(patientsRepository);
const createPatientController = new CreatePatientController(
  createPatientUseCase,
);

export { createPatientController };
