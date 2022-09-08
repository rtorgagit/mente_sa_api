import { getRepository, Repository } from 'typeorm';

import { Professional } from '@modules/users/infra/typeorm/entities/Professional';
import {
  ICreateProfessionalDTO,
  IProfessionalsRepository,
} from '@modules/users/repositories/IProfessionalsRepository';

class ProfessionalsRepository implements IProfessionalsRepository {
  private repository: Repository<Professional>;

  constructor() {
    this.repository = getRepository(Professional);
  }

  async create({
    nome,
    crp,
    abordagem,
    contato,
  }: ICreateProfessionalDTO): Promise<void> {
    const professional = this.repository.create({
      nome,
      crp,
      abordagem,
      contato,
    });

    await this.repository.save(professional);
  }

  async list(): Promise<Professional[]> {
    const professionals = await this.repository.find();
    return professionals;
  }

  async findByName(nome: string): Promise<Professional> {
    const professional = await this.repository.findOne({ nome });
    return professional;
  }

  async findByCrp(crp: string): Promise<Professional> {
    const professional = await this.repository.findOne({ crp });
    return professional;
  }
}

export { ProfessionalsRepository };
