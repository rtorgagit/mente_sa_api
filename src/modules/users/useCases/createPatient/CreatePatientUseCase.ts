import { inject, injectable } from 'tsyringe';

import { IPatientsRepository } from '@modules/users/repositories/IPatientsRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  nome: string;
  cpf: string;
  email: string;
  genero: string;
  dataNascimento: Date;
}

@injectable()
class CreatePatientUseCase {
  constructor(
    @inject('PatientsRepository')
    private patientsRepository: IPatientsRepository,
  ) {}
  async execute({
    nome,
    cpf,
    email,
    genero,
    dataNascimento,
  }: IRequest): Promise<void> {
    const patientNameAlreadyExists = await this.patientsRepository.findByName(
      nome,
    );

    if (patientNameAlreadyExists) {
      throw new AppError('Paciente já cadastrado!');
    }

    const patientCpfAlreadyExists = await this.patientsRepository.findByCpf(
      cpf,
    );

    if (patientCpfAlreadyExists) {
      throw new AppError('Paciente já cadastrado!');
    }

    await this.patientsRepository.create({
      nome,
      cpf,
      email,
      genero,
      dataNascimento,
    });
  }
}

export { CreatePatientUseCase };
