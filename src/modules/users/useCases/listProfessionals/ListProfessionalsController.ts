import { Request, Response } from 'express';

import { ListProfessionalsUseCase } from './ListProfessionalsUseCase';

class ListProfessionalsController {
  constructor(private listProfessionalUseCase: ListProfessionalsUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const allProfessionals = await this.listProfessionalUseCase.execute();

    return response.status(200).json(allProfessionals);
  }
}

export { ListProfessionalsController };
