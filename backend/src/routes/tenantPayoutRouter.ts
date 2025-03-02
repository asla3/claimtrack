import express from "express";

const tenantPayoutRouter = express.Router();

tenantPayoutRouter.get("/", (req, res) => {
  res.send("Get payout");
});
tenantPayoutRouter.put("/", (req, res) => {
  res.send("Update payout");
});
tenantPayoutRouter.delete("/", (req, res) => {
  res.send("Delete payout");
});

export default tenantPayoutRouter;
