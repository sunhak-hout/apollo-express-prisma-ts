import { Prisma, PrismaClient } from '@prisma/client';
import { NotFound } from '../../libs/errors';
import { slugify } from '../../libs/utils';

export default class CategoryService {
  constructor(private readonly prisma: PrismaClient) {}

  async count() {
    return this.prisma.category.count();
  }

  async findAll() {
    return this.prisma.category.findMany();
  }

  async findOneById(id: number) {
    const category = await this.prisma.category.findUnique({ where: { id } });
    if (!category) throw new NotFound('Category does not exist.');
    return category;
  }

  async create(args: CreateArgs) {
    const slug = await this.generateTourSlug(args.name);
    return this.prisma.category.create({ data: { ...args, slug } });
  }

  async update(args: UpdateArgs) {
    const category = await this.findOneById(args.id);
    const data: Prisma.CategoryUpdateInput = { name: args.name, description: args.description };

    if (args.parentId && category.parentId !== args.parentId) {
      const parent = await this.findOneById(args.id);
      data.parent = { connect: { id: parent.id } };
    }

    if (args.parentId === null) {
      data.parent = { disconnect: true };
    }

    return this.prisma.category.update({
      where: { id: category.id },
      data,
    });
  }

  async delete(id: number) {
    await this.findOneById(id);
    return this.prisma.category.delete({ where: { id } });
  }

  private async generateTourSlug(name: string, suffix = 1, origin = name): Promise<string> {
    const slug = slugify(name);
    const existing = await this.prisma.category.findFirst({
      where: { slug: { contains: slug } },
      orderBy: { id: 'desc' },
    });
    if (!existing) return slug;
    console.log({ suffix, id: existing.id, slug: existing.slug });
    return this.generateTourSlug(`${origin}-${existing.id + suffix}`, ++suffix, origin);
  }
}

interface CreateArgs {
  name: string;
  description?: string;
  parentId?: number;
}

interface UpdateArgs {
  id: number;
  name?: string;
  description?: string;
  parentId?: number;
}
