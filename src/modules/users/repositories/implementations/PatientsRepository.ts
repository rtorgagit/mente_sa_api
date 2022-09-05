import { Patient } from '../../model/Patient';
import { ICreatePatientDTO, IPatientsRepository } from '../IPatientsRepository';

class PatientsRepository implements IPatientsRepository {
  private patients: Patient[];

  private static INSTANCE: PatientsRepository;

  private constructor() {
    this.patients = [];
  }

  public static getInstance(): PatientsRepository {
    if (!PatientsRepository.INSTANCE) {
      PatientsRepository.INSTANCE = new PatientsRepository();
    }
    return PatientsRepository.INSTANCE;
  }

  create({
    nome,
    cpf,
    email,
    genero,
    dataNascimento,
  }: ICreatePatientDTO): void {
    const patient = new Patient();
    Object.assign(patient, {
      nome,
      cpf,
      email,
      genero,
      dataNascimento,
      created_at: new Date(),
    });

    this.patients.push(patient);
  }

  list(): Patient[] {
    return this.patients;
  }

  findByName(nome: string): Patient {
    const patient = this.patients.find(patient => patient.nome === nome);
    return patient;
  }

  findByCpf(cpf: string): Patient {
    const patient = this.patients.find(patient => patient.cpf === cpf);
    return patient;
  }
}

export { PatientsRepository };
