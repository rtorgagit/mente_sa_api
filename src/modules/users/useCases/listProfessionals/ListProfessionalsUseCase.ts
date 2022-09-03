import { Professional } from '../../model/Professional';
import { IProfessionalsRepository } from '../../repositories/IProfessionalsRepository';

class ListProfessionalsUseCase {
  constructor(private professionalsRepository: IProfessionalsRepository) {}

  execute(): Professional[] {
    const allProfessionals = this.professionalsRepository.list();

    return allProfessionals;
  }
}

export { ListProfessionalsUseCase };
