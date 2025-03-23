import type { ConfigParams } from "express-openid-connect";

export const getAuth0Config = (
  config: ConfigParams & Required<Pick<ConfigParams, "secret" | "baseURL">>,
): ConfigParams => ({
  authRequired: config.authRequired ?? false,
  auth0Logout: config.auth0Logout ?? true,
  secret: config.secret,
  baseURL: config.baseURL,
  clientID: config.clientID ?? "6Ryf7Mr5YBHtI37oOJozKoWAbvZP7koT",
  issuerBaseURL:
    config.issuerBaseURL ?? "https://dev-qe6kdzk4qf8rxwsx.us.auth0.com",
});
