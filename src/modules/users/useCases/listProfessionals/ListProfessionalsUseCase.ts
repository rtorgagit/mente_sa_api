import { Professional } from '../../entities/Professional';
import { IProfessionalsRepository } from '../../repositories/IProfessionalsRepository';

class ListProfessionalsUseCase {
  constructor(private professionalsRepository: IProfessionalsRepository) {}

  async execute(): Promise<Professional[]> {
    const allProfessionals = await this.professionalsRepository.list();

    return allProfessionals;
  }
}

export { ListProfessionalsUseCase };
