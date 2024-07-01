import { Inject, Injectable } from '@nestjs/common';
import { NOTIFICATIONS, USERS } from '../../globals/constnts';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user.dto';
import { USER_CREATED_MSG } from './constants';
import { MessageResponse } from './responses/message.response';

@Injectable()
export class UserService {
  constructor (
    @Inject(USERS)
    private readonly userClient: ClientProxy,

    @Inject(NOTIFICATIONS)
    private readonly notificationClient: ClientProxy,
  ) {}

  createUser (data: CreateUserDto): MessageResponse {
    this.userClient.emit('create-user', data);
    this.notificationClient.emit('notification', { message: USER_CREATED_MSG });
    return { message: USER_CREATED_MSG };
  }
}
