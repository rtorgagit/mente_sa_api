import { Request, Response } from 'express';

import { ListProfessionalsUseCase } from './ListProfessionalsUseCase';

class ListProfessionalsController {
  constructor(private listProfessionalUseCase: ListProfessionalsUseCase) {}
  handle(request: Request, response: Response): Response {
    const allProfessionals = this.listProfessionalUseCase.execute();

    return response.status(200).json(allProfessionals);
  }
}

export { ListProfessionalsController };
