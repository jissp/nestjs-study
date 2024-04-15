import { applyDecorators, SetMetadata } from '@nestjs/common';

export const MethodOverridingDecoratorKey = Symbol('TEST_DECORATOR');

export function MethodOverridingDecorator(test: string, age: number): MethodDecorator {
    return applyDecorators(SetMetadata(MethodOverridingDecoratorKey, [test, age]));
}
