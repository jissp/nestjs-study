import { Injectable, OnModuleInit } from '@nestjs/common';
import { DiscoveryService, MetadataScanner, Reflector } from '@nestjs/core';
import { MethodOverridingDecoratorKey } from '../decorators';

@Injectable()
export class DecoratorService implements OnModuleInit {
    constructor(
        private readonly discoveryService: DiscoveryService,
        private readonly metadataScanner: MetadataScanner,
        private readonly reflector: Reflector,
    ) {}

    onModuleInit() {
        const providers = this.discoveryService.getProviders();

        providers
            .filter(wrapper => wrapper.isDependencyTreeStatic())
            .forEach(({ metatype, instance }) => {
                if (!instance || !metatype) {
                    return false;
                }

                const methods = this.metadataScanner.getAllMethodNames(instance);

                methods.forEach(method => {
                    const args = this.reflector.get(MethodOverridingDecoratorKey, instance[method]);
                    if (args) {
                        const methodRef = instance[method];

                        instance[method] = function (...args: any[]) {
                            console.log('before');
                            methodRef.apply(instance, args);
                            console.log('after');
                        };
                    }
                });
            });
    }
}
