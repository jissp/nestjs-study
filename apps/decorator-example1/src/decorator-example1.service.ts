import { Injectable } from '@nestjs/common';

@Injectable()
export class DecoratorExample1Service {
  getHello(): string {
    return 'Hello World!';
  }
}
