import { Pacient } from '../model/Pacient';

interface ICreatePacientDTO {
  nome: string;
  cpf: string;
  email: string;
  genero: string;
  dataNascimento: Date;
}

interface IPacientsRepository {
  create({ nome, cpf, email, genero, dataNascimento }: ICreatePacientDTO): void;
  list(): Pacient[];
  findByName(nome: string): Pacient;
  findByCpf(cpf: string): Pacient;
}

export { IPacientsRepository, ICreatePacientDTO };
