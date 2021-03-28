import { PrismaClient } from '@prisma/client';
import DataLoader from 'dataloader';
export class CategoryLoader {
  constructor(private readonly prisma: PrismaClient) {}

  parent = new DataLoader(
    async (keys: number[]) => {
      const categories = await this.prisma.category.findMany({
        where: { id: { in: [...keys] } },
        include: { parent: true },
      });
      return keys.map((key) => categories.find((category) => category.id === key).parent);
    },
    { cache: false },
  );

  children = new DataLoader(
    async (keys: number[]) => {
      const categories = await this.prisma.category.findMany({
        where: { id: { in: [...keys] } },
        include: { children: true },
      });
      return keys.map((key) => categories.find((category) => category.id === key).children);
    },
    { cache: false },
  );
}
