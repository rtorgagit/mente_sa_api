import { PatientsRepository } from '../../repositories/implementations/PatientsRepository';
import { ListPatientsController } from './ListPatientsController';
import { ListPatientsUseCase } from './ListPatientsUseCase';

const patientsRepository = PatientsRepository.getInstance();
const listProfessionalUseCase = new ListPatientsUseCase(patientsRepository);
const listPatientsController = new ListPatientsController(
  listProfessionalUseCase,
);

export { listPatientsController };
