import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import itemsRouter from "./modules/items/items.route";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + Typescript Server");
});

app.use("/items", itemsRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
