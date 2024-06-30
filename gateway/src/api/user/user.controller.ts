import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ErrorWithValidationsResponse } from '../../globals/responses/error-with-validations.response';
import { MessageResponse } from './responses/message.response';

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
  @ApiCreatedResponse({ type: MessageResponse })
  @ApiBadRequestResponse({
    type: ErrorWithValidationsResponse,
    description: `
      Invalid request data`,
  })
  create (
    @Body() data: CreateUserDto,
  ): MessageResponse {
    return this.userService.createUser(data);
  }
}
