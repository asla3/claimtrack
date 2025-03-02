import express from "express";
import tenantFinancialClaimStatusRouter from "./tenantFinancialClaimStatusRouter";

const tenantFinancialClaimStatusesRouter = express.Router();

tenantFinancialClaimStatusesRouter.get("/", (req, res) => {
  res.send("Get financial claim statuses");
});
tenantFinancialClaimStatusesRouter.post("/", (req, res) => {
  res.send("Create financial claim status");
});

tenantFinancialClaimStatusesRouter.use(
  "/:financial_claim_status_id",
  tenantFinancialClaimStatusRouter,
);

export default tenantFinancialClaimStatusesRouter;
