import { Pacient } from '../../model/Pacient';
import { ICreatePacientDTO, IPacientsRepository } from '../IPacientsRepository';

class PacientsRepository implements IPacientsRepository {
  private pacients: Pacient[];

  constructor() {
    this.pacients = [];
  }

  create({
    nome,
    cpf,
    email,
    genero,
    dataNascimento,
  }: ICreatePacientDTO): void {
    const pacient = new Pacient();
    Object.assign(pacient, {
      nome,
      cpf,
      email,
      genero,
      dataNascimento,
      created_at: new Date(),
    });

    this.pacients.push(pacient);
  }

  list(): Pacient[] {
    return this.pacients;
  }

  findByName(nome: string): Pacient {
    const pacient = this.pacients.find(pacient => pacient.nome === nome);
    return pacient;
  }

  findByCpf(cpf: string): Pacient {
    const pacient = this.pacients.find(pacient => pacient.cpf === cpf);
    return pacient;
  }
}

export { PacientsRepository };
