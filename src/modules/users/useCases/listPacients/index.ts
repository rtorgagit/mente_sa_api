import { PacientsRepository } from '../../repositories/implementations/PacientsRepository';
import { ListPacientsController } from './ListPacientsController';
import { ListPacientsUseCase } from './ListPacientsUseCase';

const pacientsRepository = PacientsRepository.getInstance();
const listProfessionalUseCase = new ListPacientsUseCase(pacientsRepository);
const listPacientsController = new ListPacientsController(
  listProfessionalUseCase,
);

export { listPacientsController };
