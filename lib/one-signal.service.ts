import { Inject, Injectable } from "@nestjs/common";
import { App, Configuration, CreateNotificationSuccessResponse, CreateSegmentSuccessResponse, DefaultApi, ExportEventsSuccessResponse, ExportSubscriptionsRequestBody, ExportSubscriptionsSuccessResponse, GenericSuccessBoolResponse, GetNotificationHistoryRequestBody, GetSegmentsSuccessResponse, Notification, NotificationHistorySuccessResponse, NotificationSlice, NotificationWithMeta, OutcomesData, PropertiesBody, Segment, SubscriptionBody, TransferSubscriptionRequestBody, UpdateLiveActivityRequest, UpdateLiveActivitySuccessResponse, UpdateUserRequest, User, UserIdentityBody } from "@onesignal/node-onesignal";
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

  public cancelNotification(notificationID: string, options?: Configuration): Promise<GenericSuccessBoolResponse> {
    return this.oneSignalClient.cancelNotification(this.options.appId, notificationID, options)
  }

  public createAlias(aliasLabel: string, aliasId: string, userIdentityBody: any, options?: Configuration): Promise<UserIdentityBody> {
    return this.oneSignalClient.createAlias(this.options.appId, aliasLabel, aliasId, userIdentityBody, options)
  }

  public createAliasBySubscription(subscriptionId: string, userIdentityBody: any, options?: Configuration): Promise<UserIdentityBody> {
    return this.oneSignalClient.createAliasBySubscription(this.options.appId, subscriptionId, userIdentityBody, options)
  }

  public createApp(app: App, options?: Configuration): Promise<App> {
    return this.oneSignalClient.createApp(app, options)
  }

  public createNotification(notification: Notification, options?: Configuration): Promise<CreateNotificationSuccessResponse> {
    return this.oneSignalClient.createNotification(notification, options)
  }

  public createSegment(segment: Segment, options?: Configuration): Promise<CreateSegmentSuccessResponse> {
    return this.oneSignalClient.createSegment(this.options.appId, segment, options)
  }

  public createSubscription(aliasLabel: string, aliasId: string, subscriptionBody: SubscriptionBody, options?: Configuration): Promise<SubscriptionBody> {
    return this.oneSignalClient.createSubscription(this.options.appId, aliasLabel, aliasId, subscriptionBody, options)
  }

  public createUser(user: User, options?: Configuration): Promise<User> {
    return this.oneSignalClient.createUser(this.options.appId, user, options)
  }

  public deleteAlias(aliasLabel: string, aliasId: string, aliasLabelToDelete: string, options?: Configuration): Promise<UserIdentityBody> {
    return this.oneSignalClient.deleteAlias(this.options.appId, aliasLabel, aliasId, aliasLabelToDelete, options)
  }

  public deleteSegment(segmentId: string, options?: Configuration): Promise<GenericSuccessBoolResponse> {
    return this.oneSignalClient.deleteSegment(this.options.appId, segmentId, options)
  }

  public deleteSubscription(subscriptionId: string, options?: Configuration): Promise<void> {
    return this.oneSignalClient.deleteSubscription(this.options.appId, subscriptionId, options)
  }

  public deleteUser(aliasLabel: string, aliasId: string, options?: Configuration): Promise<void> {
    return this.oneSignalClient.deleteUser(this.options.appId, aliasLabel, aliasId, options)
  }

  public exportEvents(notificationId: string, options?: Configuration): Promise<ExportEventsSuccessResponse> {
    return this.oneSignalClient.exportEvents(notificationId, this.options.appId, options)
  }

  public exportSubscriptions(exportSubscriptionsRequestBody: ExportSubscriptionsRequestBody, options?: Configuration): Promise<ExportSubscriptionsSuccessResponse> {
    return this.oneSignalClient.exportSubscriptions(this.options.appId, exportSubscriptionsRequestBody, options)
  }

  public getAliases(aliasLabel: string, aliasId: string, options?: Configuration): Promise<UserIdentityBody> {
    return this.oneSignalClient.getAliases(this.options.appId, aliasLabel, aliasId, options)
  }

  public getAliasesBySubscription(subscriptionId: string, options?: Configuration): Promise<UserIdentityBody> {
    return this.oneSignalClient.getAliasesBySubscription(this.options.appId, subscriptionId, options)
  }

  public getApp(options?: Configuration): Promise<App> {
    return this.oneSignalClient.getApp(this.options.appId, options)
  }

  public getApps(options?: Configuration): Promise<Array<App>> {
    return this.oneSignalClient.getApps(options)
  }

  public getNotification(notificationId: string, options?: Configuration): Promise<NotificationWithMeta> {
    return this.oneSignalClient.getNotification(this.options.appId, notificationId, options);
  }

  public getNotificationHistory(notificationId: string, getNotificationHistoryRequestBody: GetNotificationHistoryRequestBody, options?: Configuration): Promise<NotificationHistorySuccessResponse> {
    return this.oneSignalClient.getNotificationHistory(notificationId, getNotificationHistoryRequestBody, options)
  }

  public getNotifications(limit?: number, offset?: number, kind?: 0 | 1 | 3, options?: Configuration): Promise<NotificationSlice> {
    return this.oneSignalClient.getNotifications(this.options.appId, limit, offset, kind, options);
  }

  public getOutcomes(outcomeNames: string, outcomeNames2?: string, outcomeTimeRange?: string, outcomePlatforms?: string, outcomeAttribution?: string, options?: Configuration): Promise<OutcomesData> {
    return this.oneSignalClient.getOutcomes(this.options.appId, outcomeNames, outcomeNames2, outcomeTimeRange, outcomePlatforms, outcomeAttribution, options)
  }

  public getSegments(offset?: number, limit?: number, options?: Configuration): Promise<GetSegmentsSuccessResponse> {
    return this.oneSignalClient.getSegments(this.options.appId, offset, limit, options)
  }

  public getUser(aliasLabel: string, aliasId: string, options?: Configuration): Promise<User> {
    return this.oneSignalClient.getUser(this.options.appId, aliasLabel, aliasId, options)
  }

  public transferSubscription(subscriptionId: string, transferSubscriptionRequestBody: TransferSubscriptionRequestBody, options?: Configuration): Promise<UserIdentityBody> {
    return this.oneSignalClient.transferSubscription(this.options.appId, subscriptionId, transferSubscriptionRequestBody, options)
  }

  public unsubscribeEmailWithToken(notificationId: string, token: string, options?: Configuration): Promise<GenericSuccessBoolResponse> {
    return this.oneSignalClient.unsubscribeEmailWithToken(this.options.appId, notificationId, token, options)
  }

  public updateApp(app: App, options?: Configuration): Promise<App> {
    return this.oneSignalClient.updateApp(this.options.appId, app, options)
  }

  public updateLiveActivity(activityId: string, updateLiveActivityRequest: UpdateLiveActivityRequest, options?: Configuration): Promise<UpdateLiveActivitySuccessResponse> {
    return this.oneSignalClient.updateLiveActivity(this.options.appId, activityId, updateLiveActivityRequest, options)
  }

  public updateSubscription(subscriptionId: string, subscriptionBody: SubscriptionBody, options?: Configuration): Promise<void> {
    return this.oneSignalClient.updateSubscription(this.options.appId, subscriptionId, subscriptionBody, options)
  }

  public updateUser(aliasLabel: string, aliasId: string, updateUserRequest: UpdateUserRequest, options?: Configuration): Promise<PropertiesBody> {
    return this.oneSignalClient.updateUser(this.options.appId, aliasLabel, aliasId, updateUserRequest, options)
  }
}
