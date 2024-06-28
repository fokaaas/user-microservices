import { Injectable } from '@nestjs/common';
import { UserEntity } from '../../database/entities/user.entity';

@Injectable()
export class UserMapper {
  getUser (user: UserEntity) {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      description: user.description,
      status: user.status,
    };
  }
}