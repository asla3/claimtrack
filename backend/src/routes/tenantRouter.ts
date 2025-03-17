import express from "express";

import tenantUsersRouter from "./tenantUsersRouter";
import tenantServicesRouter from "./tenantServicesRouter";
import tenantReceiptsRouter from "./tenantReceiptsRouter";
import tenantFinancialClaimsRouter from "./tenantFinancialClaimsRouter";
import tenantPayoutsRouter from "./tenantPayoutsRouter";
import tenantFinancialClaimStatusesRouter from "./tenantFinancialClaimStatusesRouter";
import tenantServiceProvidersRouter from "./tenantServiceProvidersRouter";
import tenantServiceTypesRouter from "./tenantServiceTypesRouter";
import tenantDepartmentsRouter from "./tenantDepartmentsRouter";
import buildTenantRouteHandler from "@/helpers/buildTenantRouteHandler";

const tenantRouter = express.Router({ mergeParams: true });

tenantRouter.get(
  "/",
  buildTenantRouteHandler((req, res) => {
    res.send(`Return tenant with id ${req.params.tenantId}. Work in progress`);
  }),
);
tenantRouter.post(
  "/",
  buildTenantRouteHandler((req, res) => {
    res.send("Create a new tenant. Work in progress");
  }),
);
tenantRouter.put(
  "/",
  buildTenantRouteHandler((req, res) => {
    res.send(`Update tenant with id ${req.params.tenantId}. Work in progress`);
  }),
);
tenantRouter.delete(
  "/",
  buildTenantRouteHandler((req, res) => {
    res.send(`Delete tenant with id ${req.params.tenantId}. Work in progress`);
  }),
);

tenantRouter.use("/users", tenantUsersRouter);
tenantRouter.use("/services", tenantServicesRouter);
tenantRouter.use("/receipts", tenantReceiptsRouter);
tenantRouter.use("/financial-claims", tenantFinancialClaimsRouter);
tenantRouter.use("/payouts", tenantPayoutsRouter);
tenantRouter.use(
  "/financial-claim-statuses",
  tenantFinancialClaimStatusesRouter,
);
tenantRouter.use("/service-providers", tenantServiceProvidersRouter);
tenantRouter.use("/service-types", tenantServiceTypesRouter);
tenantRouter.use("/departments", tenantDepartmentsRouter);

export default tenantRouter;
