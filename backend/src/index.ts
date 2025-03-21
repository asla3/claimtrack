import express, { Express } from "express";
import dotenv from "dotenv";
import { auth } from "express-openid-connect";

import tenantsRouter from "./routes/tenantsRouter";
import { getAuth0Config } from "./config/auth0";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
const auth0Secret = process.env.AUTH0_SECRET;

if (!auth0Secret) {
  throw new Error("AUTH0_SECRET is not set");
}

app.use(
  auth(
    getAuth0Config({ secret: auth0Secret, baseURL: "http://localhost:3000" }),
  ),
);
app.use(express.json());

// TODO: remove when API ready
app.get("/", (req, res) => {
  res.send("Express + Typescript Server");
});

app.use("/tenants", tenantsRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
