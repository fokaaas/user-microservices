import { NestFactory } from '@nestjs/core';
import { AppModule } from './api/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';
import * as process from 'process';

async function bootstrap () {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    logger: ['log', 'fatal', 'error', 'warn', 'debug', 'verbose'],
    options: {
      urls: [process.env.RMQ_URL],
      queue: 'users_queue',
    },
  });

  app.useGlobalPipes(new ValidationPipe());
  await app.listen();
}
bootstrap();
