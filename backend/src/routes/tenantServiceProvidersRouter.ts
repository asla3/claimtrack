import express from "express";

import tenantServiceProviderRouter from "./tenantServiceProviderRouter";

const tenantServiceProvidersRouter = express.Router();

tenantServiceProvidersRouter.get("/", (req, res) => {
  res.send("Get service providers");
});
tenantServiceProvidersRouter.post("/", (req, res) => {
  res.send("Create service provider");
});

tenantServiceProvidersRouter.use(
  "/:service_provider_id",
  tenantServiceProviderRouter,
);

export default tenantServiceProvidersRouter;
