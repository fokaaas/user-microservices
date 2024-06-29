import { NestFactory } from '@nestjs/core';
import { AppModule } from './api/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap () {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      logger: ['log', 'fatal', 'error', 'warn', 'debug', 'verbose'],
    }
  );

  app.useGlobalPipes(new ValidationPipe());
  await app.listen();
}
bootstrap();
