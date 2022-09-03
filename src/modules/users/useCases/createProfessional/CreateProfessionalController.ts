import { Request, Response } from 'express';

import { CreateProfessionalUseCase } from './CreateProfessionalUseCase';

class CreateProfessionalControler {
  constructor(private createProfessionalUseCase: CreateProfessionalUseCase) {}

  handle(request: Request, response: Response): Response {
    const { nome, crp, abordagem, contato } = request.body;

    this.createProfessionalUseCase.execute({ nome, crp, abordagem, contato });

    return response.status(201).send();
  }
}

export { CreateProfessionalControler };
