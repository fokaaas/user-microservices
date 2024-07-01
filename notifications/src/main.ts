import { NestFactory } from '@nestjs/core';
import { AppModule } from './api/app.module';
import * as process from 'process';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap () {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RMQ_URL],
      queue: 'users_queue',
    },
  });

  app.useGlobalPipes(new ValidationPipe());
  await app.listen();
}
bootstrap();
