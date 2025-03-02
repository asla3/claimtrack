import express from "express";
import tenantServiceTypeRouter from "./tenantServiceTypeRouter";

const tenantServiceTypesRouter = express.Router();

tenantServiceTypesRouter.get("/", (req, res) => {
  res.send("Get service types");
});
tenantServiceTypesRouter.post("/", (req, res) => {
  res.send("Create service type");
});

tenantServiceTypesRouter.use("/:service_type_id", tenantServiceTypeRouter);

export default tenantServiceTypesRouter;
