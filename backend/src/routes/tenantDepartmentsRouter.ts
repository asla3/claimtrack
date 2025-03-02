import express from "express";

import tenantDepartmentRouter from "./tenantDepartmentRouter";

const tenantDepartmentsRouter = express.Router();

tenantDepartmentsRouter.get("/", (req, res) => {
  res.send("Get departments");
});
tenantDepartmentsRouter.post("/", (req, res) => {
  res.send("Create department");
});

tenantDepartmentsRouter.use("/:department_id", tenantDepartmentRouter);

export default tenantDepartmentsRouter;
