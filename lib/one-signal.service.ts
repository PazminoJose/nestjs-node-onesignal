import { Inject, Injectable } from "@nestjs/common";
import { Configuration, DefaultApi, NotificationSlice, NotificationWithMeta } from "@onesignal/node-onesignal";
import { NotificationBuilder } from "./builders";
import { createOneSignalConfiguration } from "./config";
import { ONE_SIGNAL_CONFIG_OPTIONS } from "./constants";
import { OneSignalModuleOptions } from "./interfaces";

@Injectable()
export class OneSignalService {
  private oneSignalClient: DefaultApi;
  private oneSignalNotificationBuilder: NotificationBuilder;

  constructor(@Inject(ONE_SIGNAL_CONFIG_OPTIONS) private options: OneSignalModuleOptions) {
    this.oneSignalClient = new DefaultApi(createOneSignalConfiguration(options.restApiKey));
    this.oneSignalNotificationBuilder = new NotificationBuilder(this.options.appId);
  }

  public get client(): DefaultApi {
    return this.oneSignalClient;
  }

  public get notificationBuilder(): NotificationBuilder {
    return this.oneSignalNotificationBuilder;
  }

  public getNotification(id: string, options?: Configuration): Promise<NotificationWithMeta> {
    return this.oneSignalClient.getNotification(this.options.appId, id, options);
  }

  public getNotifications(limit?: number, offset?: number): Promise<NotificationSlice> {
    return this.oneSignalClient.getNotifications(this.options.appId, limit, offset);
  }
}
