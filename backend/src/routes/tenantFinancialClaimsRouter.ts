import express from "express";

import tenantFinancialClaimRouter from "./tenantFinancialClaimRouter";

const tenantFinancialClaimsRouter = express.Router();

tenantFinancialClaimsRouter.get("/", (req, res) => {
  res.send("Get financial claims");
});
tenantFinancialClaimsRouter.post("/", (req, res) => {
  res.send("Create financial claim");
});

tenantFinancialClaimsRouter.use(
  "/:financial_claim_id",
  tenantFinancialClaimRouter,
);

export default tenantFinancialClaimsRouter;
