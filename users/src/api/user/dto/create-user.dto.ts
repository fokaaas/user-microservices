import { IsEmail, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { Status } from '@prisma/client';

export class CreateUserDto {
  @IsEmail({}, { message: 'Invalid email' })
  @IsNotEmpty({ message: 'Email is required' })
    email: string;

  @IsOptional()
    name?: string;

  @IsOptional()
    description?: string;

  @IsEnum(Status, { message: 'Invalid status' })
  @IsOptional()
    status?: Status;
}