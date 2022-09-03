import { PacientsRepository } from '../../repositories/implementations/PacientsRepository';
import { CreatePacientController } from './CreatePacientController';
import { CreatePacientUseCase } from './CreatePacientUseCase';

const pacientsRepository = PacientsRepository.getInstance();
const createPacientUseCase = new CreatePacientUseCase(pacientsRepository);
const createPacientController = new CreatePacientController(
  createPacientUseCase,
);

export { createPacientController };
