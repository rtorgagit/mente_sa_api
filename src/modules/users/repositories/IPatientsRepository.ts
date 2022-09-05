import { Patient } from '../model/Patient';

interface ICreatePatientDTO {
  nome: string;
  cpf: string;
  email: string;
  genero: string;
  dataNascimento: Date;
}

interface IPatientsRepository {
  create({ nome, cpf, email, genero, dataNascimento }: ICreatePatientDTO): void;
  list(): Patient[];
  findByName(nome: string): Patient;
  findByCpf(cpf: string): Patient;
}

export { IPatientsRepository, ICreatePatientDTO };
