import { Request, Response } from 'express';

import { CreatePatientUseCase } from './CreatePatientUseCase';

class CreatePatientController {
  constructor(private createPatientUseCase: CreatePatientUseCase) {}

  handle(request: Request, response: Response): Response {
    const { nome, cpf, email, genero, dataNascimento } = request.body;

    this.createPatientUseCase.execute({
      nome,
      cpf,
      email,
      genero,
      dataNascimento,
    });

    return response.status(201).send();
  }
}

export { CreatePatientController };
