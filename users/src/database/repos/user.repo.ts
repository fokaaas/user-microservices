import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserRepo {
  constructor (
    private readonly prisma: PrismaService,
  ) {}

  async create (data: Prisma.UserUncheckedCreateInput): Promise<UserEntity> {
    return this.prisma.user.create({ data });
  }

  async find (where: Prisma.UserWhereInput): Promise<UserEntity> {
    return this.prisma.user.findFirst({ where });
  }
}