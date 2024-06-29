import { Controller, Logger } from '@nestjs/common';
import { UserService } from './user.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user.dto';
import { UserMapper } from './user.mapper';
import { UserResponse } from './responses/user.response';

@Controller('/users')
export class UserController {
  constructor (
    private readonly userService: UserService,
    private readonly userMapper: UserMapper,
  ) {}

  private readonly logger = new Logger(UserController.name);

  @MessagePattern({ cmd: 'user_create' })
  async create (data: CreateUserDto): Promise<UserResponse> {
    const user = await this.userService.create(data);
    this.logger.log(`User created: ${user}`);
    return this.userMapper.getUser(user);
  }
}
