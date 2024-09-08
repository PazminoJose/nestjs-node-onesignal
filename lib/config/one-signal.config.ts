import { createConfiguration } from "@onesignal/node-onesignal";

export const createOneSignalConfiguration = (restApiKey: string) => {
  const app_key_provider = {
    getToken() {
      return restApiKey;
    }
  };
  const oneSignalConfiguration = createConfiguration({
    authMethods: {
      rest_api_key: {
        tokenProvider: app_key_provider
      }
    }
  });
  return oneSignalConfiguration;
};
