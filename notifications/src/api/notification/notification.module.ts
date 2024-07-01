import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { BullQueueModule } from '../../bull/bull-queue.module';
import { NotificationProcessor } from './notification.processor';

@Module({
  imports: [BullQueueModule],
  providers: [NotificationService, NotificationProcessor],
  controllers: [NotificationController],
})
export class NotificationModule {}
