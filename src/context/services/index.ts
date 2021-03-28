import { PrismaClient } from '@prisma/client';
import CategoryService from './CategoryService';
import UserService from './UserService';

export const createServices = (prisma: PrismaClient) => ({
  userService: new UserService(prisma),
  categoryService: new CategoryService(prisma),
});
