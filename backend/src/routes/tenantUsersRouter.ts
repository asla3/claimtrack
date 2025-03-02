import express from "express";
import tenantUserRouter from "./tenantUserRouter";

const tenantUsersRouter = express.Router();

tenantUsersRouter.get("/", (req, res) => {
  res.send("Get users");
});
tenantUsersRouter.post("/", (req, res) => {
  res.send("`Create user");
});

tenantUsersRouter.use("/:userId", tenantUserRouter);

export default tenantUsersRouter;
