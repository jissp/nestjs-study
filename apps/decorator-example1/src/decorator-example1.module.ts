import { Module } from '@nestjs/common';
import { DecoratorExample1Controller } from './decorator-example1.controller';
import { DecoratorExample1Service } from './decorator-example1.service';

@Module({
  imports: [],
  controllers: [DecoratorExample1Controller],
  providers: [DecoratorExample1Service],
})
export class DecoratorExample1Module {}
