import { inject, injectable } from 'tsyringe';

import { Patient } from '../../entities/Patient';
import { IPatientsRepository } from '../../repositories/IPatientsRepository';

@injectable()
class ListPatientsUseCase {
  constructor(
    @inject('PatientsRepository')
    private patientsRepository: IPatientsRepository,
  ) {}

  async execute(): Promise<Patient[]> {
    const allPatients = await this.patientsRepository.list();

    return allPatients;
  }
}

export { ListPatientsUseCase };
