import { Request, Response } from 'express';

import { CreatePatientUseCase } from './CreatePatientUseCase';

class CreatePatientController {
  constructor(private createPatientUseCase: CreatePatientUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, cpf, email, genero, dataNascimento } = request.body;

    await this.createPatientUseCase.execute({
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
