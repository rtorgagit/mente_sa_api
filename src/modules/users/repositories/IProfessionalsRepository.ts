import { Professional } from '../entities/Professional';

interface ICreateProfessionalDTO {
  nome: string;
  crp: string;
  abordagem: string;
  contato: string;
}

interface IProfessionalsRepository {
  create({
    nome,
    crp,
    abordagem,
    contato,
  }: ICreateProfessionalDTO): Promise<void>;
  list(): Promise<Professional[]>;
  findByName(nome: string): Promise<Professional>;
  findByCrp(crp: string): Promise<Professional>;
}

export { IProfessionalsRepository, ICreateProfessionalDTO };
