import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { NOTIFICATIONS_QUEUE } from './constants';

@Module({
  imports: [
    BullModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const host = configService.get<string>('redis.host');
        const port = configService.get<number>('redis.port');
        return {
          redis: { host, port },
        };
      },
      inject: [ConfigService],
    }),
    BullModule.registerQueue({
      name: NOTIFICATIONS_QUEUE,
    }),
  ],
  exports: [BullModule],
})
export class BullQueueModule {}