import { OneSignalModuleOptions } from "./one-signal-module-options.interface";

export interface OneSignalModuleAsyncOptions {
  useFactory: (...args: any[]) => Promise<OneSignalModuleOptions> | OneSignalModuleOptions;
  inject?: any[];
}
