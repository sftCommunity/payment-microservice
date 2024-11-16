import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './config';

async function bootstrap() {
  const logger = new Logger('Payment microservice');

  const app = await NestFactory.create(AppModule);
  await app.listen(envs.port);
  logger.log(`Payment microservice is running on port ${envs.port}`);
}
bootstrap();
