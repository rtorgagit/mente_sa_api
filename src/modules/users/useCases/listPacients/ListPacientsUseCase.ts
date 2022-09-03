import { Pacient } from '../../model/Pacient';
import { IPacientsRepository } from '../../repositories/IPacientsRepository';

class ListPacientsUseCase {
  constructor(private pacientsRepository: IPacientsRepository) {}

  execute(): Pacient[] {
    const allPacients = this.pacientsRepository.list();

    return allPacients;
  }
}

export { ListPacientsUseCase };
