import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import config from '../config/config';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      load: [config],
    }),
  ],
})
export class AppModule {}
