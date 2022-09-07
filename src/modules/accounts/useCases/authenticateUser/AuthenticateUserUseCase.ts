import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    nome: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}
  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('E-mail ou senha incorretos!', 400);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError('E-mail ou senha incorretos!', 400);
    }

    const token = sign({}, 'c9809bf542d6240bea7ed1861aa38dcf7da3c1ef', {
      subject: user.id,
      expiresIn: '1d',
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        nome: user.nome,
        email: user.email,
      },
    };
    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
