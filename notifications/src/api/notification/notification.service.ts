import { Injectable } from '@nestjs/common';
import { NOTIFICATIONS_QUEUE } from '../../bull/constants';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { NotificationDto } from './dto/notification.dto';
import { DAY } from './constants';

@Injectable()
export class NotificationService {
  constructor (
    @InjectQueue(NOTIFICATIONS_QUEUE)
    private readonly userQueue: Queue,
  ) {}

  async sendNotification (data: NotificationDto): Promise<void> {
    await this.userQueue.add('sendNotification', data, { delay: DAY });
  }
}
