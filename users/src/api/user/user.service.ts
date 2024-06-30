import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRepo } from '../../database/repos/user.repo';
import { CreateUserDto } from './dto/create-user.dto';
import { USER_WITH_SUCH_EMAIL_ALREADY_EXISTS_MSG } from './constants';

@Injectable()
export class UserService {
  constructor (
    private readonly userRepo: UserRepo,
  ) {}

  async create (data: CreateUserDto) {
    const user = await this.userRepo.find({ email: data.email });
    if (user) {
      throw new BadRequestException(USER_WITH_SUCH_EMAIL_ALREADY_EXISTS_MSG);
    }

    await this.userRepo.create(data);
  }
}
