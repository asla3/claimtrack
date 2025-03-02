import express from "express";

const tenantFinancialClaimStatusRouter = express.Router();

tenantFinancialClaimStatusRouter.get("/", (req, res) => {
  res.send("Get financial claim status");
});
tenantFinancialClaimStatusRouter.put("/", (req, res) => {
  res.send("Update financial claim status");
});
tenantFinancialClaimStatusRouter.delete("/", (req, res) => {
  res.send("Delete financial claim status");
});

export default tenantFinancialClaimStatusRouter;
