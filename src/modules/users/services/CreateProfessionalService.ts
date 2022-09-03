import { IProfessionalsRepository } from '../repositories/IProfessionalsRepository';

interface IRequest {
  nome: string;
  crp: string;
  abordagem: string;
  contato: string;
}

class CreateProfessionalService {
  constructor(private professionalsRepository: IProfessionalsRepository) {}
  execute({ nome, crp, abordagem, contato }: IRequest): void {
    const professionalNameAlreadyExists =
      this.professionalsRepository.findByName(nome);

    if (professionalNameAlreadyExists) {
      throw new Error('Profissional já cadastrado!');
    }

    const professionalCrpAlreadyExists =
      this.professionalsRepository.findByCrp(crp);

    if (professionalCrpAlreadyExists) {
      throw new Error('Profissional já cadastrado!');
    }

    this.professionalsRepository.create({
      nome,
      crp,
      abordagem,
      contato,
    });
  }
}

export { CreateProfessionalService };
