import { inject, injectable } from 'tsyringe';

import { AppError } from '@errors/AppError';
import { IProfessionalsRepository } from '@modules/users/repositories/IProfessionalsRepository';

interface IRequest {
  nome: string;
  crp: string;
  abordagem: string;
  contato: string;
}

@injectable()
class CreateProfessionalUseCase {
  constructor(
    @inject('ProfessionalsRepository')
    private professionalsRepository: IProfessionalsRepository,
  ) {}

  async execute({ nome, crp, abordagem, contato }: IRequest): Promise<void> {
    const professionalNameAlreadyExists =
      await this.professionalsRepository.findByName(nome);

    if (professionalNameAlreadyExists) {
      throw new AppError('Profissional já cadastrado!', 400);
    }

    const professionalCrpAlreadyExists =
      await this.professionalsRepository.findByCrp(crp);

    if (professionalCrpAlreadyExists) {
      throw new AppError('Profissional já cadastrado!', 400);
    }

    await this.professionalsRepository.create({
      nome,
      crp,
      abordagem,
      contato,
    });
  }
}

export { CreateProfessionalUseCase };
