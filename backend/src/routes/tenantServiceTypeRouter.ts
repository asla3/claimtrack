import express from "express";

const tenantServiceTypeRouter = express.Router();

tenantServiceTypeRouter.get("/", (req, res) => {
  res.send("Get service type");
});
tenantServiceTypeRouter.put("/", (req, res) => {
  res.send("Update service type");
});
tenantServiceTypeRouter.delete("/", (req, res) => {
  res.send("Delete service type");
});

export default tenantServiceTypeRouter;
