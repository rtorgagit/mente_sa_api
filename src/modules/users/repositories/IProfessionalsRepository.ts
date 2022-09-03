import { Professional } from '../model/Professional';

interface ICreateProfessionalDTO {
  nome: string;
  crp: string;
  abordagem: string;
  contato: string;
}

interface IProfessionalsRepository {
  create({ nome, crp, abordagem, contato }: ICreateProfessionalDTO): void;
  list(): Professional[];
  findByName(nome: string): Professional;
  findByCrp(crp: string): Professional;
}

export { IProfessionalsRepository, ICreateProfessionalDTO };
