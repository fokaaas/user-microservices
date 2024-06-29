import { Injectable } from '@nestjs/common';
import { UserEntity } from '../../database/entities/user.entity';
import { UserResponse } from './responses/user.response';

@Injectable()
export class UserMapper {
  getUser (user: UserEntity): UserResponse {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      description: user.description,
      status: user.status,
    };
  }
}