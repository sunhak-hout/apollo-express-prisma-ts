import { PrismaClient } from '@prisma/client';
import UserService from './UserService';

export const createServices = (prisma: PrismaClient) => ({
  userService: new UserService(prisma),
});
