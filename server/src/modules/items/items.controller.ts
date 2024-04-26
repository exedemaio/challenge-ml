import { Request, Response } from "express";
import { getItem, getItems } from "./items.service";

export const getItemsController = async (req: Request, res: Response) => {
  const { q, limit } = req.query;
  const result = await getItems({
    query: q?.toString(),
    limit: limit?.toString(),
  });
  res.send(result);
};

export const getItemController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await getItem(id);
  res.send(result);
};
