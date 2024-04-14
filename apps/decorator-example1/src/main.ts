import { NestFactory } from '@nestjs/core';
import { DecoratorExample1Module } from './decorator-example1.module';

async function bootstrap() {
  const app = await NestFactory.create(DecoratorExample1Module);
  await app.listen(3000);
}
bootstrap();
