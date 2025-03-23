import express from "express";

import tenantRouter from "./tenantRouter";

const tenantsRouter = express.Router();

tenantsRouter.use("/:tenantId", tenantRouter);

export default tenantsRouter;
