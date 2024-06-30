import { Inject, Injectable } from '@nestjs/common';
import { USERS } from '../../globals/constnts';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user.dto';
import { USER_CREATED_MSG } from './constants';
import { MessageResponse } from './responses/message.response';

@Injectable()
export class UserService {
  constructor (
    @Inject(USERS)
    private readonly userClient: ClientProxy,
  ) {}

  createUser (data: CreateUserDto): MessageResponse {
    const pattern = 'create-user';
    this.userClient.emit(pattern, data);
    return { message: USER_CREATED_MSG };
  }
}
