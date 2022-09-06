import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateProfessionalUseCase } from './CreateProfessionalUseCase';

class CreateProfessionalController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, crp, abordagem, contato } = request.body;

    const createProfessionalUseCase = container.resolve(
      CreateProfessionalUseCase,
    );

    await createProfessionalUseCase.execute({
      nome,
      crp,
      abordagem,
      contato,
    });

    return response.status(201).send();
  }
}

export { CreateProfessionalController };
