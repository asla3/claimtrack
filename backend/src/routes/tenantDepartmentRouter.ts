import express from "express";

const tenantDepartmentRouter = express.Router();

tenantDepartmentRouter.get("/", (req, res) => {
  res.send("Get department");
});
tenantDepartmentRouter.put("/", (req, res) => {
  res.send("Update department");
});
tenantDepartmentRouter.delete("/", (req, res) => {
  res.send("Delete department");
});
export default tenantDepartmentRouter;
