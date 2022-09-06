import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreatePatientUseCase } from './CreatePatientUseCase';

class CreatePatientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, cpf, email, genero, dataNascimento } = request.body;

    const createPatientUseCase = container.resolve(CreatePatientUseCase);

    await createPatientUseCase.execute({
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
