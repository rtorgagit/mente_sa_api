import { getRepository, Repository } from 'typeorm';

import { Patient } from '../../entities/Patient';
import { ICreatePatientDTO, IPatientsRepository } from '../IPatientsRepository';

class PatientsRepository implements IPatientsRepository {
  private repository: Repository<Patient>;

  constructor() {
    this.repository = getRepository(Patient);
  }

  async create({
    nome,
    cpf,
    email,
    genero,
    dataNascimento,
  }: ICreatePatientDTO): Promise<void> {
    const patient = this.repository.create({
      nome,
      cpf,
      email,
      genero,
      dataNascimento,
    });

    await this.repository.save(patient);
  }

  async list(): Promise<Patient[]> {
    const patients = await this.repository.find();
    return patients;
  }

  async findByName(nome: string): Promise<Patient> {
    const patient = await this.repository.findOne({ nome });
    return patient;
  }

  async findByCpf(cpf: string): Promise<Patient> {
    const patient = await this.repository.findOne({ cpf });
    return patient;
  }
}

export { PatientsRepository };
