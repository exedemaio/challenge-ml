import {
  MLItem,
  MLItemDescription,
  MLResponseItems,
  MLResult,
  MLSeller,
} from "../providers/ml.models";
import {
  getItemDescriptionML,
  getItemML,
  getItemsML,
  getUserML,
} from "../providers/ml.service";
import { mapItem, mapItems } from "./items.mapper";
import { ItemResponse, ItemsResponse } from "./items.models";

export const getItems = async ({
  query,
  limit,
}: {
  query?: string;
  limit?: string;
}) => {
  try {
    const itemsML: MLResponseItems = await getItemsML({ query, limit });
    const userPromises = itemsML?.results.map((item: MLResult) => {
      return getUserML(item.seller.id);
    });
    const users: MLSeller[] = await Promise.all(userPromises);
    const items: ItemsResponse = mapItems(itemsML, users);
    return items;
  } catch (error) {
    console.log({ error });
  }
};

export const getItem = async (id: string) => {
  try {
    const itemML: MLItem = await getItemML(id);
    const itemDescriptionML: MLItemDescription = await getItemDescriptionML(id);
    const item: ItemResponse = mapItem(itemML, itemDescriptionML);
    return item;
  } catch (error) {
    console.log({ error });
  }
};
