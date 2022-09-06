import { container } from 'tsyringe';

import { PatientsRepository } from '../../modules/users/repositories/implementations/PatientsRepository';
import { ProfessionalsRepository } from '../../modules/users/repositories/implementations/ProfessionalsRepository';
import { IPatientsRepository } from '../../modules/users/repositories/IPatientsRepository';
import { IProfessionalsRepository } from '../../modules/users/repositories/IProfessionalsRepository';

container.registerSingleton<IProfessionalsRepository>(
  'ProfessionalsRepository',
  ProfessionalsRepository,
);

container.registerSingleton<IPatientsRepository>(
  'PatientsRepository',
  PatientsRepository,
);
