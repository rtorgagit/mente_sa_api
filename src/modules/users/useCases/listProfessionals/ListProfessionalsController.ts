import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListProfessionalsUseCase } from './ListProfessionalsUseCase';

class ListProfessionalsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listProfessionalUseCase = container.resolve(ListProfessionalsUseCase);

    const allProfessionals = await listProfessionalUseCase.execute();

    return response.status(200).json(allProfessionals);
  }
}

export { ListProfessionalsController };
