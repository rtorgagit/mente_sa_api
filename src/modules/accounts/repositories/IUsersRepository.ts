import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../entities/User';

interface IUsersRepository {
  create({ nome, email, password }: ICreateUserDTO): Promise<void>;
  findById(id: string): Promise<User>;
}

export { IUsersRepository };
