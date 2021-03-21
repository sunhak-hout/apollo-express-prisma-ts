import { PrismaClient, User } from '@prisma/client';
import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';
import { createDataLoaders } from './dataloaders';
import { createServices } from './services';

const prisma = new PrismaClient();
const dataloaders = createDataLoaders(prisma);
export const services = createServices(prisma);

export async function context({ req }: ExpressContext) {
  const token = req.headers.authorization;
  const user = await services.userService.getAuthUser(token);

  return { services, dataloaders, user };
}

export interface Context {
  services: typeof services;
  dataloaders: typeof dataloaders;
  user: User;
}
