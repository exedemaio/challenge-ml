interface Price {
  currency: string;
  amount: number;
  decimals: number;
}

export interface Author {
  name: string;
  lastname: string;
}

interface Item {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity?: number;
  description?: string;
}

export interface ItemsResponse {
  author: Author;
  categories: string[];
  items: Item[];
}

interface Price {
  currency: string;
  amount: number;
  decimals: number;
}

export interface ItemResponse {
  author: Author;
  item: Item;
}
