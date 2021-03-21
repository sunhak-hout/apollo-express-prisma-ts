import { PrismaClient } from '@prisma/client';
import { NotFound, Unauthorized, UnprocessableEntity } from '../../libs/errors';
import { signToken, verifyToken } from '../../libs/jwt';
import { comparePassword, hashPassword } from '../../libs/utils';

const { JWT_SECRET_KEY } = process.env;

export default class UserService {
  constructor(private readonly prisma: PrismaClient) {}

  async findOneById(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFound('User does not exist.');
    return user;
  }

  async findOneByEmail(email: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) throw new NotFound('User does not exist.');
    return user;
  }

  async create(input: CreateUserInput) {
    const emailExists = await this.prisma.user.findUnique({
      where: { email: input.email },
    });
    if (emailExists) throw new UnprocessableEntity('Email already exists.');
    return this.prisma.user.create({
      data: {
        email: input.email,
        password: hashPassword(input.password),
      },
    });
  }

  async loginUser(input: LoginInput) {
    const { password, email } = input;
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user || !comparePassword(password, user.password))
      throw new Unauthorized('Incorrect credentials.');
    return signToken({ email, secret: JWT_SECRET_KEY });
  }

  async getAuthUser(token: string) {
    const verified = verifyToken(token, JWT_SECRET_KEY);
    if (!verified || !verified.email) return null;
    return this.prisma.user.findUnique({ where: { email: verified.email } });
  }
}

interface CreateUserInput {
  email: string;
  password: string;
}

interface LoginInput {
  email: string;
  password: string;
}
