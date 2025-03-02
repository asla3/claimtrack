import express from "express";

const tenantUserRouter = express.Router();

tenantUserRouter.get("/", (req, res) => {
  res.send("Get user");
});
tenantUserRouter.put("/", (req, res) => {
  res.send("Update user");
});
tenantUserRouter.delete("/", (req, res) => {
  res.send("Delete user");
});

export default tenantUserRouter;
