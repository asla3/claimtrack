export const getAuth0Config = (secret: string) => ({
  authRequired: false,
  auth0Logout: true,
  secret: secret,
  baseURL: "http://localhost:3000",
  clientID: "6Ryf7Mr5YBHtI37oOJozKoWAbvZP7koT",
  issuerBaseURL: "https://dev-qe6kdzk4qf8rxwsx.us.auth0.com",
});
