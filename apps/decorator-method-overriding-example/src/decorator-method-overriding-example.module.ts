import { Module } from '@nestjs/common';
import { DecoratorExampleService, DecoratorService } from './services';
import { DiscoveryModule } from '@nestjs/core';

@Module({
    imports: [DiscoveryModule],
    providers: [DecoratorExampleService, DecoratorService],
})
export class DecoratorMethodOverridingExampleModule {}
