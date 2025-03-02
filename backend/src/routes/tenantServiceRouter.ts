import express from "express";

const tenantServiceRouter = express.Router();

tenantServiceRouter.get("/", (req, res) => {
  res.send("Get service");
});
tenantServiceRouter.put("/", (req, res) => {
  res.send("Update service");
});
tenantServiceRouter.delete("/", (req, res) => {
  res.send("Delete service");
});

export default tenantServiceRouter;
