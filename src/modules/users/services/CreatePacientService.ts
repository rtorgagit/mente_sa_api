import { IPacientsRepository } from '../repositories/IPacientsRepository';

interface IRequest {
  nome: string;
  cpf: string;
  email: string;
  genero: string;
  dataNascimento: Date;
}

class CreatePacientService {
  constructor(private pacientsRepository: IPacientsRepository) {}
  execute({ nome, cpf, email, genero, dataNascimento }: IRequest): void {
    const pacientNameAlreadyExists = this.pacientsRepository.findByName(nome);

    if (pacientNameAlreadyExists) {
      throw new Error('Paciente já cadastrado!');
    }

    const pacientCpfAlreadyExists = this.pacientsRepository.findByCpf(cpf);

    if (pacientCpfAlreadyExists) {
      throw new Error('Pacient já cadastrado!');
    }

    this.pacientsRepository.create({
      nome,
      cpf,
      email,
      genero,
      dataNascimento,
    });
  }
}

export { CreatePacientService };
