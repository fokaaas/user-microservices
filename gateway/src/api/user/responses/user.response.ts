import { StatusEnum } from '../enums/status.enum';
import { ApiProperty } from '@nestjs/swagger';

export class UserResponse {
  @ApiProperty()
    id: string;

  @ApiProperty()
    email: string;

  @ApiProperty()
    name: string;

  @ApiProperty()
    description: string;

  @ApiProperty({
    enum: StatusEnum,
  })
    status: StatusEnum;
}