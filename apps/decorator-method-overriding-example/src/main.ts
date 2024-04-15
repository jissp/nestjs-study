import { NestFactory } from '@nestjs/core';
import { DecoratorMethodOverridingExampleModule } from './decorator-method-overriding-example.module';

async function bootstrap() {
    const app = await NestFactory.create(DecoratorMethodOverridingExampleModule);
    await app.listen(3000);
}

bootstrap();
