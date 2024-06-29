import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { DatabaseModule } from '../../database/database.module';
import { UserMapper } from './user.mapper';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [UserService, UserMapper],
  imports: [DatabaseModule],
})
export class UserModule {}
