import { inject, injectable } from 'tsyringe';

import { Professional } from '@modules/users/entities/Professional';
import { IProfessionalsRepository } from '@modules/users/repositories/IProfessionalsRepository';

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
