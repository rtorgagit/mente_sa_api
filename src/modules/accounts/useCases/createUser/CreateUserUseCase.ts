import { hash } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ nome, email, password }: ICreateUserDTO): Promise<void> {
    const userEmailAlreadyExsists = await this.usersRepository.findByEmail(
      email,
    );

    if (userEmailAlreadyExsists) {
      throw new Error('Usuário já cadastrado!');
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      nome,
      email,
      password: passwordHash,
    });
  }
}

export { CreateUserUseCase };
