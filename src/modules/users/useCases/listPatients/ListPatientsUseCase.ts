import { Patient } from '../../entities/Patient';
import { IPatientsRepository } from '../../repositories/IPatientsRepository';

class ListPatientsUseCase {
  constructor(private patientsRepository: IPatientsRepository) {}

  async execute(): Promise<Patient[]> {
    const allPatients = await this.patientsRepository.list();

    return allPatients;
  }
}

export { ListPatientsUseCase };
