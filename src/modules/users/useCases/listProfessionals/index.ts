import { ProfessionalsRepository } from '../../repositories/implementations/ProfessionalsRepository';
import { ListProfessionalsController } from './ListProfessionalsController';
import { ListProfessionalsUseCase } from './ListProfessionalsUseCase';

export default (): ListProfessionalsController => {
  const professionalsRepository = new ProfessionalsRepository();
  const listProfessionalUseCase = new ListProfessionalsUseCase(
    professionalsRepository,
  );
  const listProfessionalsController = new ListProfessionalsController(
    listProfessionalUseCase,
  );

  return listProfessionalsController;
};
