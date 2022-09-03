import { ProfessionalsRepository } from '../../repositories/implementations/ProfessionalsRepository';
import { CreateProfessionalControler } from './CreateProfessionalController';
import { CreateProfessionalUseCase } from './CreateProfessionalUseCase';

const professionalsRepository = ProfessionalsRepository.getInstance();
const createProfessionalUseCase = new CreateProfessionalUseCase(
  professionalsRepository,
);

const createProfessionalControler = new CreateProfessionalControler(
  createProfessionalUseCase,
);

export { createProfessionalControler };
