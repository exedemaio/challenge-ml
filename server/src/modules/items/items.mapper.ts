import {
  FilterValue,
  MLFilter,
  MLItem,
  MLItemDescription,
  MLResponseItems,
  MLResult,
  MLSeller,
} from "../providers/ml.models";
import { ItemResponse, ItemsResponse } from "./items.models";

export const mapItems = (
  responseItems: MLResponseItems,
  users: MLSeller[]
): ItemsResponse => {
  const author = {
    name: process.env.AUTHOR_NAME || "",
    lastname: process.env.AUTHOR_LASTNAME || "",
  };

  const categories: string[] = [];
  const categoryFilter = responseItems.filters.find(
    (filter: MLFilter) => filter.id === "category"
  );
  if (categoryFilter && categoryFilter.values) {
    categoryFilter.values.forEach((value: FilterValue) => {
      if (value.path_from_root && value.path_from_root.length > 0) {
        const categoryNames = value.path_from_root.map(
          (category: { id: string; name: string }) => category.name
        );
        categories.push(...categoryNames);
      }
    });
  }

  const items = responseItems.results.map((result: MLResult, i: number) => ({
    id: result.id,
    title: result.title,
    price: {
      currency: result.currency_id,
      amount: Math.floor(result.price),
      decimals: Number((result.price % 1).toFixed(2)) * 100,
    },
    picture: result.thumbnail,
    condition: result.condition,
    free_shipping: result.shipping?.free_shipping || false,
    location: users[i].address.city,
  }));

  return {
    author,
    categories,
    items,
  };
};

export const mapItem = (
  item: MLItem,
  MLDescription: MLItemDescription
): ItemResponse => {
  const author = {
    name: process.env.AUTHOR_NAME || "",
    lastname: process.env.AUTHOR_LASTNAME || "",
  };

  const currency = item.currency_id;
  const amount = Math.floor(item.price);
  const decimals = Math.round((item.price - amount) * 100);

  const formattedItem: ItemResponse = {
    author,
    item: {
      id: item.id,
      title: item.title,
      price: {
        currency: currency,
        amount: amount,
        decimals: decimals,
      },
      picture: item.pictures[0].url,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      sold_quantity: 0,
      description: MLDescription.plain_text,
    },
  };

  return formattedItem;
};
