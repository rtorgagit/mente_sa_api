import { inject, injectable } from 'tsyringe';

import { Professional } from '../../entities/Professional';
import { IProfessionalsRepository } from '../../repositories/IProfessionalsRepository';

@injectable()
class ListProfessionalsUseCase {
  constructor(
    @inject('ProfessionalsRepository')
    private professionalsRepository: IProfessionalsRepository,
  ) {}

  async execute(): Promise<Professional[]> {
    const allProfessionals = await this.professionalsRepository.list();

    return allProfessionals;
  }
}

export { ListProfessionalsUseCase };
