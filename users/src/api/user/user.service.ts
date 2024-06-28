import { Injectable } from '@nestjs/common';
import { UserRepo } from '../../database/repos/user.repo';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from '../../database/entities/user.entity';

@Injectable()
export class UserService {
  constructor (
    private readonly userRepo: UserRepo,
  ) {}

  async create (data: CreateUserDto): Promise<UserEntity> {
    return this.userRepo.create(data);
  }
}
