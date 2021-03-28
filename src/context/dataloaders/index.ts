import { PrismaClient } from '@prisma/client';
import { CategoryLoader } from './CategoryLoader';

export const createDataLoaders = (prisma: PrismaClient) => ({
  categoryLoader: new CategoryLoader(prisma),
});
