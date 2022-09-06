import { container } from 'tsyringe';

import { UsersRepository } from '../../modules/accounts/repositories/implementations/UsersRepository';
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';
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

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
