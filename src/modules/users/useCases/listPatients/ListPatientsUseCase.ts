import { Patient } from '../../model/Patient';
import { IPatientsRepository } from '../../repositories/IPatientsRepository';

class ListPatientsUseCase {
  constructor(private patientsRepository: IPatientsRepository) {}

  execute(): Patient[] {
    const allPatients = this.patientsRepository.list();

    return allPatients;
  }
}

export { ListPatientsUseCase };
