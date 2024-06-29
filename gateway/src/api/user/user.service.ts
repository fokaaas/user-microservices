import { Inject, Injectable } from '@nestjs/common';
import { USERS } from '../../globals/constnts';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user.dto';
import { UserResponse } from './responses/user.response';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  constructor (
    @Inject(USERS)
    private readonly userClient: ClientProxy,
  ) {}

  async createUser (data: CreateUserDto): Promise<Observable<UserResponse>> {
    const pattern = { cmd: 'user_create' };
    return this.userClient.send<UserResponse>(pattern, data);
  }
}
