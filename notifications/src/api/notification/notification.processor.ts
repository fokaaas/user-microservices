import { Process, Processor } from '@nestjs/bull';
import { NOTIFICATIONS_QUEUE } from '../../bull/constants';
import { Job } from 'bull';
import { NotificationDto } from './dto/notification.dto';

const NOTIFICATIONS_SERVICE_URL = 'https://webhook.site/a1e9af72-93e0-4df9-bf95-5f0b09fbb5a2';

@Processor(NOTIFICATIONS_QUEUE)
export class NotificationProcessor {
  @Process('sendNotification')
  async sendNotification (job: Job<NotificationDto>) {
    await fetch(NOTIFICATIONS_SERVICE_URL, {
      method: 'POST',
      body: JSON.stringify(job.data),
      headers: { 'Content-Type': 'application/json' },
    });
  }
}