import express from "express";

import tenantRouter from "./tenantRouter";

const tenantsRouter = express.Router();

tenantsRouter.get("/", (req, res) => {
  res.send("Return list of tenants. Work in progress");
});
tenantsRouter.post("/", (req, res) => {
  res.send("Create a new tenant. Work in progress");
});

tenantsRouter.use("/:tenantId", tenantRouter);

export default tenantsRouter;
