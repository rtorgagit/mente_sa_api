import { Request, Response } from 'express';

import { ListPacientsUseCase } from './ListPacientsUseCase';

class ListPacientsController {
  constructor(private listProfessionalUseCase: ListPacientsUseCase) {}
  handle(request: Request, response: Response): Response {
    const allProfessionals = this.listProfessionalUseCase.execute();

    return response.status(200).json(allProfessionals);
  }
}

export { ListPacientsController };
