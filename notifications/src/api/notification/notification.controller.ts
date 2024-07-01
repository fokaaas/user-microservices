import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { NotificationDto } from './dto/notification.dto';
import { NotificationService } from './notification.service';

@Controller()
export class NotificationController {
  constructor (
    private readonly notificationService: NotificationService,
  ) {}

  @EventPattern('notification')
  async createNotification (data: NotificationDto) {
    await this.notificationService.sendNotification(data);
  }
}
