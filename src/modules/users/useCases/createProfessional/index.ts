import { ProfessionalsRepository } from '../../repositories/implementations/ProfessionalsRepository';
import { CreateProfessionalController } from './CreateProfessionalController';
import { CreateProfessionalUseCase } from './CreateProfessionalUseCase';

export default (): CreateProfessionalController => {
  const professionalsRepository = new ProfessionalsRepository();
  const createProfessionalUseCase = new CreateProfessionalUseCase(
    professionalsRepository,
  );

  const createProfessionalController = new CreateProfessionalController(
    createProfessionalUseCase,
  );

  return createProfessionalController;
};
