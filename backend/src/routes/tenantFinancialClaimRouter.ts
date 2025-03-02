import express from "express";

const tenantFinancialClaimRouter = express.Router();

tenantFinancialClaimRouter.get("/", (req, res) => {
  res.send("Get financial claim");
});
tenantFinancialClaimRouter.put("/", (req, res) => {
  res.send("Update financial claim");
});
tenantFinancialClaimRouter.delete("/", (req, res) => {
  res.send("Delete financial claim");
});

export default tenantFinancialClaimRouter;
