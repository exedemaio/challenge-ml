import axios from "axios";
import {
  MLItem,
  MLItemDescription,
  MLResponseItems,
  MLSeller,
} from "./ml.models";

export const getItemsML = async ({
  query,
  limit,
}: {
  query?: string;
  limit?: string;
}) => {
  try {
    let url = `${process.env.MERCADOLIBRE_API_URL}/sites/MLA/search?q=${query}`;
    if (limit) {
      url += `&limit=${limit}`;
    }

    const response = await axios.get(url);

    return response.data as MLResponseItems;
  } catch (error) {
    console.log(error);
    return {} as MLResponseItems;
  }
};

export const getItemML = async (id: string) => {
  try {
    const url = `${process.env.MERCADOLIBRE_API_URL}/items/${id}`;

    const response = await axios.get(url);

    return response.data as MLItem;
  } catch (error) {
    console.log(error);
    return {} as MLItem;
  }
};

export const getItemDescriptionML = async (id: string) => {
  try {
    const url = `${process.env.MERCADOLIBRE_API_URL}/items/${id}/description`;

    const response = await axios.get(url);

    return response.data as MLItemDescription;
  } catch (error) {
    console.log(error);
    return {} as MLItemDescription;
  }
};

export const getUserML = async (id: number) => {
  try {
    const url = `${process.env.MERCADOLIBRE_API_URL}/users/${id}`;

    const response = await axios.get(url);

    return response.data as MLSeller;
  } catch (error) {
    console.log(error);
    return {} as MLSeller;
  }
};
