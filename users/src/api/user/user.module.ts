import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { DatabaseModule } from '../../database/database.module';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [DatabaseModule],
})
export class UserModule {}
