import { inject, injectable } from 'tsyringe';

import { IProfessionalsRepository } from '../../repositories/IProfessionalsRepository';

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
      throw new Error('Profissional já cadastrado!');
    }

    const professionalCrpAlreadyExists =
      await this.professionalsRepository.findByCrp(crp);

    if (professionalCrpAlreadyExists) {
      throw new Error('Profissional já cadastrado!');
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
