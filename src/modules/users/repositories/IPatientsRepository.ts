import { Patient } from '../entities/Patient';

interface ICreatePatientDTO {
  nome: string;
  cpf: string;
  email: string;
  genero: string;
  dataNascimento: Date;
}

interface IPatientsRepository {
  create({
    nome,
    cpf,
    email,
    genero,
    dataNascimento,
  }: ICreatePatientDTO): Promise<void>;
  list(): Promise<Patient[]>;
  findByName(nome: string): Promise<Patient>;
  findByCpf(cpf: string): Promise<Patient>;
}

export { IPatientsRepository, ICreatePatientDTO };
