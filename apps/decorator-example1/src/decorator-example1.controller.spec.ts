import { Test, TestingModule } from '@nestjs/testing';
import { DecoratorExample1Controller } from './decorator-example1.controller';
import { DecoratorExample1Service } from './decorator-example1.service';

describe('DecoratorExample1Controller', () => {
  let decoratorExample1Controller: DecoratorExample1Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DecoratorExample1Controller],
      providers: [DecoratorExample1Service],
    }).compile();

    decoratorExample1Controller = app.get<DecoratorExample1Controller>(DecoratorExample1Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(decoratorExample1Controller.getHello()).toBe('Hello World!');
    });
  });
});
