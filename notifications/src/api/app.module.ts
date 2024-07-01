import { Module } from '@nestjs/common';
import { NotificationModule } from './notification/notification.module';
import { ConfigModule } from '@nestjs/config';
import config from '../config/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
    }),
    NotificationModule,
  ],
})
export class AppModule {}
