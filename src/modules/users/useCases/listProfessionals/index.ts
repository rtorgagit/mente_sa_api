import { ProfessionalsRepository } from '../../repositories/implementations/ProfessionalsRepository';
import { ListProfessionalsController } from './ListProfessionalsController';
import { ListProfessionalsUseCase } from './ListProfessionalsUseCase';

const professionalsRepository = ProfessionalsRepository.getInstance();
const listProfessionalUseCase = new ListProfessionalsUseCase(
  professionalsRepository,
);
const listProfessionalsController = new ListProfessionalsController(
  listProfessionalUseCase,
);

export { listProfessionalsController };
