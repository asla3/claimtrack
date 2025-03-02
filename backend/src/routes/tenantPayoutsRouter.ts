import express from "express";

import tenantPayoutRouter from "./tenantPayoutRouter";

const tenantPayoutsRouter = express.Router();

tenantPayoutsRouter.get("/", (req, res) => {
  res.send("Get payouts");
});
tenantPayoutsRouter.post("/", (req, res) => {
  res.send("Create payout");
});

tenantPayoutsRouter.use("/:payout_id", tenantPayoutRouter);

export default tenantPayoutsRouter;
