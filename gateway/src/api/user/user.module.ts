import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { USERS } from '../../globals/constnts';

@Module({
  imports: [
    ClientsModule.register([
      { name: USERS, transport: Transport.TCP },
    ]),
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
