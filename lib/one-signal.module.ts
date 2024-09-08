import { DynamicModule, Module } from "@nestjs/common";
import { ONE_SIGNAL_CONFIG_OPTIONS } from "./constants";
import { OneSignalModuleAsyncOptions, OneSignalModuleOptions } from "./interfaces";
import { OneSignalService } from "./one-signal.service";

@Module({ exports: [OneSignalService] })
export class OneSignalModule {
  static forRoot(options: OneSignalModuleOptions): DynamicModule {
    return {
      module: OneSignalModule,
      providers: [
        {
          provide: ONE_SIGNAL_CONFIG_OPTIONS,
          useValue: options
        },
        OneSignalService
      ],
      exports: [OneSignalService]
    };
  }

  static forRootAsync(options: OneSignalModuleAsyncOptions): DynamicModule {
    return {
      module: OneSignalModule,
      providers: [
        {
          provide: ONE_SIGNAL_CONFIG_OPTIONS,
          useFactory: options.useFactory,
          inject: options.inject
        },
        OneSignalService
      ],
      exports: [OneSignalService]
    };
  }
}
