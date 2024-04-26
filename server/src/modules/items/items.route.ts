import express, { Router } from "express";
import { getItemController, getItemsController } from "./items.controller";

const itemsRouter: Router = express.Router();

itemsRouter.get("/", getItemsController);

itemsRouter.get("/:id", getItemController);

export default itemsRouter;
