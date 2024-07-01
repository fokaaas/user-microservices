import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NOTIFICATIONS, USERS, USERS_QUEUE } from '../../globals/constnts';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: USERS,
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => {
          const rmqUrl = configService.get<string>('rmqUrl');
          return {
            transport: Transport.RMQ,
            options: {
              urls: [rmqUrl],
              queue: USERS_QUEUE,
            },
          };
        },
        inject: [ConfigService],
      },
      {
        name: NOTIFICATIONS,
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => {
          const rmqUrl = configService.get<string>('rmqUrl');
          return {
            transport: Transport.RMQ,
            options: {
              urls: [rmqUrl],
              queue: USERS_QUEUE,
            },
          };
        },
        inject: [ConfigService],
      },
    ]),
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
