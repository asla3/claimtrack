export const getAuth0Config = ({
  secret,
  baseURL,
}: {
  secret: string;
  baseURL: string;
}) => ({
  authRequired: false,
  auth0Logout: true,
  secret: secret,
  baseURL: baseURL,
  clientID: "6Ryf7Mr5YBHtI37oOJozKoWAbvZP7koT",
  issuerBaseURL: "https://dev-qe6kdzk4qf8rxwsx.us.auth0.com",
});
