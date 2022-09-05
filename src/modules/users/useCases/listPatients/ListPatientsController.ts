import { Request, Response } from 'express';

import { ListPatientsUseCase } from './ListPatientsUseCase';

class ListPatientsController {
  constructor(private listProfessionalUseCase: ListPatientsUseCase) {}
  handle(request: Request, response: Response): Response {
    const allPatients = this.listProfessionalUseCase.execute();

    return response.status(200).json(allPatients);
  }
}

export { ListPatientsController };
