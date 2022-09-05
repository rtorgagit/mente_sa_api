import { IPatientsRepository } from '../../repositories/IPatientsRepository';

interface IRequest {
  nome: string;
  cpf: string;
  email: string;
  genero: string;
  dataNascimento: Date;
}

class CreatePatientUseCase {
  constructor(private patientsRepository: IPatientsRepository) {}
  execute({ nome, cpf, email, genero, dataNascimento }: IRequest): void {
    const patientNameAlreadyExists = this.patientsRepository.findByName(nome);

    if (patientNameAlreadyExists) {
      throw new Error('Paciente já cadastrado!');
    }

    const patientCpfAlreadyExists = this.patientsRepository.findByCpf(cpf);

    if (patientCpfAlreadyExists) {
      throw new Error('Pacient já cadastrado!');
    }

    this.patientsRepository.create({
      nome,
      cpf,
      email,
      genero,
      dataNascimento,
    });
  }
}

export { CreatePatientUseCase };
