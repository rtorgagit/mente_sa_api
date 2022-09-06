import { Request, Response } from 'express';

import { CreateProfessionalUseCase } from './CreateProfessionalUseCase';

class CreateProfessionalController {
  constructor(private createProfessionalUseCase: CreateProfessionalUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, crp, abordagem, contato } = request.body;

    await this.createProfessionalUseCase.execute({
      nome,
      crp,
      abordagem,
      contato,
    });

    return response.status(201).send();
  }
}

export { CreateProfessionalController };
