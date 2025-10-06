import {
  BasicNotificationAllOfAndroidBackgroundLayout,
  Button,
  Filter,
  LanguageStringMap,
  Notification,
  NotificationAggregationEnum,
  NotificationTargetChannelEnum
} from "@onesignal/node-onesignal";

export class NotificationBuilder {
  private notification: Notification;

  constructor(app_id: string) {
    this.notification = new Notification();
    this.notification.app_id = app_id;
  }

  setIncludedSegments(includedSegments: string[]) {
    this.notification.included_segments = includedSegments;
    return this;
  }

  setExcludedSegments(excludedSegments: string[]) {
    this.notification.excluded_segments = excludedSegments;
    return this;
  }

  setIncludePlayerIds(playerIds: string[]) {
    this.notification.include_subscription_ids = playerIds;
    return this;
  }

  setIncludeExternalUserIds(externalUserIds: string[], targetChannel: string[]) {
    this.notification.include_aliases = {
      external_id: externalUserIds,
      target_channel: targetChannel
    };
    return this;
  }

  setIncludeEmailTokens(emailTokens: string[]) {
    this.notification.include_email_tokens = emailTokens;
    return this;
  }

  setIncludePhoneNumbers(phoneNumbers: string[]) {
    this.notification.include_phone_numbers = phoneNumbers;
    return this;
  }

  setIncludeIosTokens(iosTokens: string[]) {
    this.notification.include_ios_tokens = iosTokens;
    return this;
  }

  setIncludeWpWnsUris(wpWnsUris: string[]) {
    this.notification.include_wp_wns_uris = wpWnsUris;
    return this;
  }

  setIncludeAmazonRegIds(amazonRegIds: string[]) {
    this.notification.include_amazon_reg_ids = amazonRegIds;
    return this;
  }

  setIncludeChromeRegIds(chromeRegIds: string[]) {
    this.notification.include_chrome_reg_ids = chromeRegIds;
    return this;
  }

  setIncludeChromeWebRegIds(chromeWebRegIds: string[]) {
    this.notification.include_chrome_web_reg_ids = chromeWebRegIds;
    return this;
  }

  setIncludeAndroidRegIds(androidRegIds: string[]) {
    this.notification.include_android_reg_ids = androidRegIds;
    return this;
  }

  setIncludeAliases(aliases: Record<string, string[]>) {
    this.notification.include_aliases = aliases;
    return this;
  }

  setTargetChannel(targetChannel: NotificationTargetChannelEnum) {
    this.notification.target_channel = targetChannel;
    return this;
  }

  setId(id: string) {
    this.notification.id = id;
    return this;
  }

  setValue(value: number) {
    this.notification.value = value;
    return this;
  }

  setName(name: string) {
    this.notification.name = name;
    return this;
  }

  setAggregation(aggregation: NotificationAggregationEnum) {
    this.notification.aggregation = aggregation;
    return this;
  }

  setIsIos(isIos: boolean) {
    this.notification.is_ios = isIos;
    return this;
  }

  setIsAndroid(isAndroid: boolean) {
    this.notification.is_android = isAndroid;
    return this;
  }

  setIsHuawei(isHuawei: boolean) {
    this.notification.is_huawei = isHuawei;
    return this;
  }

  setIsAnyWeb(isAnyWeb: boolean) {
    this.notification.is_any_web = isAnyWeb;
    return this;
  }

  setIsChromeWeb(isChromeWeb: boolean) {
    this.notification.is_chrome_web = isChromeWeb;
    return this;
  }

  setIsFirefox(isFirefox: boolean) {
    this.notification.is_firefox = isFirefox;
    return this;
  }

  setIsSafari(isSafari: boolean) {
    this.notification.is_safari = isSafari;
    return this;
  }

  setIsWpWns(isWpWns: boolean) {
    this.notification.is_wp_wns = isWpWns;
    return this;
  }

  setIsAdm(isAdm: boolean) {
    this.notification.is_adm = isAdm;
    return this;
  }

  setIsChrome(isChrome: boolean) {
    this.notification.is_chrome = isChrome;
    return this;
  }

  setExternalId(externalId: string) {
    this.notification.external_id = externalId;
    return this;
  }

  setContents(contents: LanguageStringMap) {
    this.notification.contents = contents;
    return this;
  }

  setHeadings(headings: LanguageStringMap) {
    this.notification.headings = headings;
    return this;
  }

  setSubtitle(subtitle: LanguageStringMap) {
    this.notification.subtitle = subtitle;
    return this;
  }

  setData(data: object) {
    this.notification.data = data;
    return this;
  }

  setHuaweiMsgType(huaweiMsgType: string) {
    this.notification.huawei_msg_type = huaweiMsgType;
    return this;
  }

  setUrl(url: string) {
    this.notification.url = url;
    return this;
  }

  setWebUrl(webUrl: string) {
    this.notification.web_url = webUrl;
    return this;
  }

  setAppUrl(appUrl: string) {
    this.notification.app_url = appUrl;
    return this;
  }

  setIosAttachments(iosAttachments: object) {
    this.notification.ios_attachments = iosAttachments;
    return this;
  }

  setTemplateId(templateId: string) {
    this.notification.template_id = templateId;
    return this;
  }

  setContentAvailable(contentAvailable: boolean) {
    this.notification.content_available = contentAvailable;
    return this;
  }

  setMutableContent(mutableContent: boolean) {
    this.notification.mutable_content = mutableContent;
    return this;
  }

  setTargetContentIdentifier(targetContentIdentifier: string) {
    this.notification.target_content_identifier = targetContentIdentifier;
    return this;
  }

  setBigPicture(bigPicture: string) {
    this.notification.big_picture = bigPicture;
    return this;
  }

  setHuaweiBigPicture(huaweiBigPicture: string) {
    this.notification.huawei_big_picture = huaweiBigPicture;
    return this;
  }

  setAdmBigPicture(admBigPicture: string) {
    this.notification.adm_big_picture = admBigPicture;
    return this;
  }

  setChromeBigPicture(chromeBigPicture: string) {
    this.notification.chrome_big_picture = chromeBigPicture;
    return this;
  }

  setChromeWebImage(chromeWebImage: string) {
    this.notification.chrome_web_image = chromeWebImage;
    return this;
  }

  setButtons(buttons: Array<Button>) {
    this.notification.buttons = buttons;
    return this;
  }

  setWebButtons(webButtons: Array<Button>) {
    this.notification.web_buttons = webButtons;
    return this;
  }

  setIosCategory(iosCategory: string) {
    this.notification.ios_category = iosCategory;
    return this;
  }

  setAndroidChannelId(androidChannelId: string) {
    this.notification.android_channel_id = androidChannelId;
    return this;
  }

  setHuaweiChannelId(huaweiChannelId: string) {
    this.notification.huawei_channel_id = huaweiChannelId;
    return this;
  }

  setExistingAndroidChannelId(existingAndroidChannelId: string) {
    this.notification.existing_android_channel_id = existingAndroidChannelId;
    return this;
  }

  setHuaweiExistingChannelId(huaweiExistingChannelId: string) {
    this.notification.huawei_existing_channel_id = huaweiExistingChannelId;
    return this;
  }

  setAndroidBackgroundLayout(androidBackgroundLayout: BasicNotificationAllOfAndroidBackgroundLayout) {
    this.notification.android_background_layout = androidBackgroundLayout;
    return this;
  }

  setSmallIcon(smallIcon: string) {
    this.notification.small_icon = smallIcon;
    return this;
  }

  setHuaweiSmallIcon(huaweiSmallIcon: string) {
    this.notification.huawei_small_icon = huaweiSmallIcon;
    return this;
  }

  setLargeIcon(largeIcon: string) {
    this.notification.large_icon = largeIcon;
    return this;
  }

  setHuaweiLargeIcon(huaweiLargeIcon: string) {
    this.notification.huawei_large_icon = huaweiLargeIcon;
    return this;
  }

  setAdmSmallIcon(admSmallIcon: string) {
    this.notification.adm_small_icon = admSmallIcon;
    return this;
  }

  setAdmLargeIcon(admLargeIcon: string) {
    this.notification.adm_large_icon = admLargeIcon;
    return this;
  }

  setChromeWebIcon(chromeWebIcon: string) {
    this.notification.chrome_web_icon = chromeWebIcon;
    return this;
  }

  setChromeWebBadge(chromeWebBadge: string) {
    this.notification.chrome_web_badge = chromeWebBadge;
    return this;
  }

  setFirefoxIcon(firefoxIcon: string) {
    this.notification.firefox_icon = firefoxIcon;
    return this;
  }

  setChromeIcon(chromeIcon: string) {
    this.notification.chrome_icon = chromeIcon;
    return this;
  }

  setIosSound(iosSound: string) {
    this.notification.ios_sound = iosSound;
    return this;
  }

  setAndroidSound(androidSound: string) {
    this.notification.android_sound = androidSound;
    return this;
  }

  setHuaweiSound(huaweiSound: string) {
    this.notification.huawei_sound = huaweiSound;
    return this;
  }

  setAdmSound(admSound: string) {
    this.notification.adm_sound = admSound;
    return this;
  }

  setWpWnsSound(wpWnsSound: string) {
    this.notification.wp_wns_sound = wpWnsSound;
    return this;
  }

  setAndroidLedColor(androidLedColor: string) {
    this.notification.android_led_color = androidLedColor;
    return this;
  }

  setHuaweiLedColor(huaweiLedColor: string) {
    this.notification.huawei_led_color = huaweiLedColor;
    return this;
  }

  setAndroidAccentColor(androidAccentColor: string) {
    this.notification.android_accent_color = androidAccentColor;
    return this;
  }

  setHuaweiAccentColor(huaweiAccentColor: string) {
    this.notification.huawei_accent_color = huaweiAccentColor;
    return this;
  }

  setAndroidVisibility(androidVisibility: number) {
    this.notification.android_visibility = androidVisibility;
    return this;
  }

  setHuaweiVisibility(huaweiVisibility: number) {
    this.notification.huawei_visibility = huaweiVisibility;
    return this;
  }

  setIosBadgeType(iosBadgeType: string) {
    this.notification.ios_badge_type = iosBadgeType;
    return this;
  }

  setIosBadgeCount(iosBadgeCount: number) {
    this.notification.ios_badge_count = iosBadgeCount;
    return this;
  }

  setCollapseId(collapseId: string) {
    this.notification.collapse_id = collapseId;
    return this;
  }

  setWebPushTopic(webPushTopic: string) {
    this.notification.web_push_topic = webPushTopic;
    return this;
  }

  setApnsAlert(apnsAlert: object) {
    this.notification.apns_alert = apnsAlert;
    return this;
  }

  setDelayedOption(delayedOption: string) {
    this.notification.delayed_option = delayedOption;
    return this;
  }

  setDeliveryTimeOfDay(deliveryTimeOfDay: string) {
    this.notification.delivery_time_of_day = deliveryTimeOfDay;
    return this;
  }

  setTtl(ttl: number) {
    this.notification.ttl = ttl;
    return this;
  }

  setPriority(priority: number) {
    this.notification.priority = priority;
    return this;
  }

  setApnsPushTypeOverride(apnsPushTypeOverride: string) {
    this.notification.apns_push_type_override = apnsPushTypeOverride;
    return this;
  }

  setThrottleRatePerMinute(throttleRatePerMinute: string) {
    this.notification.throttle_rate_per_minute = throttleRatePerMinute;
    return this;
  }

  setAndroidGroup(androidGroup: string) {
    this.notification.android_group = androidGroup;
    return this;
  }

  setAndroidGroupMessage(androidGroupMessage: string) {
    this.notification.android_group_message = androidGroupMessage;
    return this;
  }

  setAdmGroup(admGroup: string) {
    this.notification.adm_group = admGroup;
    return this;
  }

  setAdmGroupMessage(admGroupMessage: object) {
    this.notification.adm_group_message = admGroupMessage;
    return this;
  }

  setThreadId(threadId: string) {
    this.notification.thread_id = threadId;
    return this;
  }

  setSummaryArg(summaryArg: string) {
    this.notification.summary_arg = summaryArg;
    return this;
  }

  setSummaryArgCount(summaryArgCount: number) {
    this.notification.summary_arg_count = summaryArgCount;
    return this;
  }

  setEmailSubject(emailSubject: string) {
    this.notification.email_subject = emailSubject;
    return this;
  }

  setEmailBody(emailBody: string) {
    this.notification.email_body = emailBody;
    return this;
  }

  setEmailFromName(emailFromName: string) {
    this.notification.email_from_name = emailFromName;
    return this;
  }

  setEmailFromAddress(emailFromAddress: string) {
    this.notification.email_from_address = emailFromAddress;
    return this;
  }

  setEmailPreheader(emailPreheader: string) {
    this.notification.email_preheader = emailPreheader;
    return this;
  }

  setIncludeUnsubscribed(includeUnsubscribed: boolean) {
    this.notification.include_unsubscribed = includeUnsubscribed;
    return this;
  }

  setSmsFrom(smsFrom: string) {
    this.notification.sms_from = smsFrom;
    return this;
  }

  setSmsMediaUrls(smsMediaUrls: Array<string>) {
    this.notification.sms_media_urls = smsMediaUrls;
    return this;
  }

  setFilters(filters: Array<Filter>) {
    this.notification.filters = filters;
    return this;
  }

  setCustomData(customData: object) {
    this.notification.custom_data = customData;
    return this;
  }

  setSendAfter(sendAfter: string) {
    this.notification.send_after = sendAfter;
    return this;
  }

  setIdempotencyKey(idempotencyKey: string) {
    this.notification.idempotency_key = idempotencyKey;
    return this;
  }

  setIosRelevanceScore(iosRelevanceScore: number) {
    this.notification.ios_relevance_score = iosRelevanceScore;
    return this;
  }

  setIosInterruptionLevel(iosInterruptionLevel: string) {
    this.notification.ios_interruption_level = iosInterruptionLevel;
    return this;
  }

  setDisableEmailClickTracking(disableEmailClickTracking: boolean) {
    this.notification.disable_email_click_tracking = disableEmailClickTracking;
    return this;
  }

  build() {
    return this.notification;
  }
}
