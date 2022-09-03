import { Request, Response } from 'express';

import { CreatePacientUseCase } from './CreatePacientUseCase';

class CreatePacientController {
  constructor(private createPacientUseCase: CreatePacientUseCase) {}

  handle(request: Request, response: Response): Response {
    const { nome, cpf, email, genero, dataNascimento } = request.body;

    this.createPacientUseCase.execute({
      nome,
      cpf,
      email,
      genero,
      dataNascimento,
    });

    return response.status(201).send();
  }
}

export { CreatePacientController };
