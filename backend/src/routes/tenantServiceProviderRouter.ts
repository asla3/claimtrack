import express from "express";

const tenantServiceProviderRouter = express.Router();

tenantServiceProviderRouter.get("/", (req, res) => {
  res.send("Get service provider");
});
tenantServiceProviderRouter.put("/", (req, res) => {
  res.send("Update service provider");
});
tenantServiceProviderRouter.delete("/", (req, res) => {
  res.send("Delete service provider");
});

export default tenantServiceProviderRouter;
