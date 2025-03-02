import express from "express";
import tenantServiceRouter from "./tenantServiceRouter";

const tenantServicesRouter = express.Router();

tenantServicesRouter.get("/", (req, res) => {
  res.send("Get services");
});
tenantServicesRouter.post("/", (req, res) => {
  res.send("Create service");
});

tenantServicesRouter.use("/:serviceId", tenantServiceRouter);

export default tenantServicesRouter;
