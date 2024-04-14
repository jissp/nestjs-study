import { Controller, Get } from '@nestjs/common';
import { DecoratorExample1Service } from './decorator-example1.service';

@Controller()
export class DecoratorExample1Controller {
  constructor(private readonly decoratorExample1Service: DecoratorExample1Service) {}

  @Get()
  getHello(): string {
    return this.decoratorExample1Service.getHello();
  }
}
