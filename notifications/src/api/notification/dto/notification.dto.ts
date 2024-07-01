import { IsNotEmpty } from 'class-validator';

export class NotificationDto {
  @IsNotEmpty({ message: 'Message cannot be empty' })
    message: string;
}
