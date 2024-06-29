import { IsEmail, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { StatusEnum } from '../enums/status.enum';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsEmail({}, { message: 'Invalid email' })
  @IsNotEmpty({ message: 'Email is required' })
    email: string;

  @ApiPropertyOptional()
  @IsOptional()
    name?: string;

  @ApiPropertyOptional()
  @IsOptional()
    description?: string;

  @ApiPropertyOptional({
    enum: StatusEnum,
  })
  @IsEnum(StatusEnum, { message: 'Invalid status' })
  @IsOptional()
    status?: StatusEnum;
}