import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserResponse } from './responses/user.response';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { ErrorWithValidationsResponse } from '../../globals/responses/error-with-validations.response';

@ApiTags('User')
@Controller({
  path: '/users',
})
export class UserController {
  constructor (
    private readonly userService: UserService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create user' })
  @ApiCreatedResponse({ type: UserResponse })
  @ApiBadRequestResponse({
    type: ErrorWithValidationsResponse,
    description: `
      Invalid request data`,
  })
  async create (
    @Body() data: CreateUserDto,
  ): Promise<Observable<UserResponse>> {
    return this.userService.createUser(data);
  }
}
