import { PatientsRepository } from '../../repositories/implementations/PatientsRepository';
import { ListPatientsController } from './ListPatientsController';
import { ListPatientsUseCase } from './ListPatientsUseCase';

export default (): ListPatientsController => {
  const patientsRepository = new PatientsRepository();
  const listPacientUseCase = new ListPatientsUseCase(patientsRepository);
  const listPatientsController = new ListPatientsController(listPacientUseCase);

  return listPatientsController;
};
