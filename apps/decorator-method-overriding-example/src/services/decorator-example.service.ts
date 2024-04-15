import { Injectable } from '@nestjs/common';
import { MethodOverridingDecorator } from '../decorators';

@Injectable()
export class DecoratorExampleService {
    @MethodOverridingDecorator('aaa', 16)
    test() {
        console.log('MethodOverridingDecorator test');
    }
}
