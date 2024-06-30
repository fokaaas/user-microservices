import { Controller, Logger } from '@nestjs/common';
import { UserService } from './user.service';
import { EventPattern } from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class UserController {
  constructor (
    private readonly userService: UserService,
  ) {}

  private readonly logger = new Logger(UserController.name);

  @EventPattern('create-user')
  async create (data: CreateUserDto) {
    const user = await this.userService.create(data);
    this.logger.log(`User created: ${user}`);
  }
}
