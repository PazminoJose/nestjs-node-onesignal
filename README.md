# NestJS wrapper for OneSignal official package: @onesignal/node-onesignal
>[!warning]
This package is based on @onesignal/node-onesignal which is currently in beta state so it may come with changes in the future, use with caution.

## Installation

```bash
$ npm i nestjs-node-onesignal
```

## Getting Started
To use OneSignal client you need register OneSignalModule in your app for example in app.module.ts
```typescript
import { OneSignalModule } from 'nestjs-node-onesignal';

@Module({
  imports: [
    OneSignalModule.forRoot({
      appId: process.env.ONESIGNAL_APP_ID,
      restApiKey: process.env.ONESIGNAL_API_KEY,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

```

If you are using the ConfigModule from the Nest package @nestjs/config, you can use the registerAsync() function to inject your environment variables like this: 
```typescript
import { OneSignalModule } from 'nestjs-node-onesignal';

@Module({
  imports: [
    OneSignalModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        appId: configService.get<string>("ONESIGNAL_APP_ID"),
        restApiKey: configService.get<string>("ONESIGNAL_API_KEY")
      }),
      inject: [ConfigService]
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }


```
## Example
The One signal service comes with an integrated notification builder so you can easily create your notifications.

```typescript
import { OneSignalService } from "nestjs-node-onesignal";

@Injectable()
export class AppService {
  constructor(
    private readonly oneSignalService: OneSignalService,
  ) {}

  async sendNotification() {
    const playerId = this.configService.get(ONESIGNAL_PLAYER_ID);
    const imageUrl = "https://www.example.com/image.jpg";
    const notification = this.oneSignalService.notificationBuilder
      .setContents({
        en: 'Send notification to a specific player ID',
      })
      .setIncludePlayerIds([playerId])
      .setContentAvailable(true)
      .setBigPicture(imageUrl)
      .setIosAttachments({ id1: this.imageUrl })
      .build();
    return await this.oneSignalService.client.createNotification(notification);
  }
}
```

For full api reference see [One Signal Node SDK](https://github.com/OneSignal/node-onesignal)

## License

This package is [MIT licensed](https://github.com/PazminoJose/nestjs-node-onesignal/blob/main/LICENSE).
