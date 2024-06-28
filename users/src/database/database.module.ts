import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UserRepo } from './repos/user.repo';

@Module({
  providers: [PrismaService, UserRepo],
  exports: [PrismaService, UserRepo],
})
export class DatabaseModule {}