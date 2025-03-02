import express from "express";

import tenantReceiptRouter from "./tenantReceiptRouter";

const tenantReceiptsRouter = express.Router();

tenantReceiptsRouter.get("/", (req, res) => {
  res.send("Get receipts");
});
tenantReceiptsRouter.post("/", (req, res) => {
  res.send("Create receipt");
});

tenantReceiptRouter.use("/:receipt_id", tenantReceiptRouter);

export default tenantReceiptsRouter;
