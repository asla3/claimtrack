import express from "express";

const tenantReceiptRouter = express.Router();

tenantReceiptRouter.get("/", (req, res) => {
  res.send("Get receipt");
});
tenantReceiptRouter.put("/", (req, res) => {
  res.send("Update receipt");
});
tenantReceiptRouter.delete("/", (req, res) => {
  res.send("Delete receipt");
});

export default tenantReceiptRouter;
