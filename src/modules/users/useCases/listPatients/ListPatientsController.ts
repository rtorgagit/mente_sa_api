import { Request, Response } from 'express';

import { ListPatientsUseCase } from './ListPatientsUseCase';

class ListPatientsController {
  constructor(private listProfessionalUseCase: ListPatientsUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const allPatients = await this.listProfessionalUseCase.execute();

    return response.status(200).json(allPatients);
  }
}

export { ListPatientsController };
