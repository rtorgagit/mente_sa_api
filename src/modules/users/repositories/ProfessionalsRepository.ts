import { Professional } from '../model/Professional';
import {
  ICreateProfessionalDTO,
  IProfessionalsRepository,
} from './IProfessionalsRepository';

class ProfessionalsRepository implements IProfessionalsRepository {
  private professionals: Professional[];

  constructor() {
    this.professionals = [];
  }

  create({ nome, crp, abordagem, contato }: ICreateProfessionalDTO): void {
    const professional = new Professional();
    Object.assign(professional, {
      nome,
      crp,
      abordagem,
      contato,
      created_at: new Date(),
    });

    this.professionals.push(professional);
  }

  list(): Professional[] {
    return this.professionals;
  }

  findByName(nome: string): Professional {
    const professional = this.professionals.find(
      professional => professional.nome === nome,
    );
    return professional;
  }

  findByCrp(crp: string): Professional {
    const professional = this.professionals.find(
      professional => professional.crp === crp,
    );
    return professional;
  }
}

export { ProfessionalsRepository };
