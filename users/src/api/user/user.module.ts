import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { DatabaseModule } from '../../database/database.module';
import { UserMapper } from './user.mapper';

@Module({
  providers: [UserService, UserMapper],
  imports: [DatabaseModule],
})
export class UserModule {}
