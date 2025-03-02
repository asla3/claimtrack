import express, { Express } from "express";
import dotenv from "dotenv";

import tenantsRouter from "./routes/tenantsRouter";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// TODO: remove when API ready
app.get("/", (req, res) => {
  res.send("Express + Typescript Server");
});

app.use("/tenants", tenantsRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
