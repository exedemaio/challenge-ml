interface Seller {
  id: number;
  nickname: string;
}

interface Shipping {
  store_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: string | null;
  mode: string;
  tags: any[];
  benefits: any[] | null;
  promise: any[] | null;
}

export interface FilterValue {
  id: string;
  name: string;
  path_from_root: { id: string; name: string }[];
}

export interface MLFilter {
  id: string;
  name: string;
  type: string;
  values: FilterValue[];
}

export interface MLResult {
  id: string;
  title: string;
  condition: string;
  thumbnail_id: string;
  catalog_product_id: string;
  listing_type_id: string;
  permalink: string;
  buying_mode: string;
  site_id: string;
  category_id: string;
  domain_id: string;
  thumbnail: string;
  currency_id: string;
  order_backend: number;
  price: number;
  original_price: number | null;
  sale_price: number | null;
  available_quantity: number;
  official_store_id: number | null;
  use_thumbnail_id: boolean;
  accepts_mercadopago: boolean;
  shipping: Shipping;
  stop_time: string;
  seller: Seller;
}

export interface MLResponseItems {
  results: MLResult[];
  filters: MLFilter[];
}

interface Address {
  city: string;
  state: string;
}

interface Transactions {
  period: string;
  total: number;
}

interface SellerReputation {
  level_id: string;
  power_seller_status: string;
  transactions: Transactions;
}

interface Status {
  site_status: string;
}

export interface MLSeller {
  id: number;
  nickname: string;
  country_id: string;
  address: Address;
  user_type: string;
  site_id: string;
  permalink: string;
  seller_reputation: SellerReputation;
  status: Status;
}

interface SaleTerm {
  id: string;
  name: string;
  value_id: string | null;
  value_name: string;
  value_struct: { number: number; unit: string } | null;
  values: {
    id: string | null;
    name: string;
    struct: { number: number; unit: string } | null;
  }[];
  value_type: string;
}

interface Picture {
  id: string;
  url: string;
  secure_url: string;
  size: string;
  max_size: string;
  quality: string;
}

interface SellerAddress {
  city: {
    id: string;
    name: string;
  };
  state: {
    id: string;
    name: string;
  };
  country: {
    id: string;
    name: string;
  };
  search_location: {
    neighborhood: {
      id: string;
      name: string;
    };
    city: {
      id: string;
      name: string;
    };
    state: {
      id: string;
      name: string;
    };
  };
  id: number;
}

export interface MLItem {
  id: string;
  site_id: string;
  title: string;
  seller_id: number;
  category_id: string;
  official_store_id: number;
  price: number;
  base_price: number;
  original_price: number;
  currency_id: string;
  initial_quantity: number;
  sale_terms: SaleTerm[];
  buying_mode: string;
  listing_type_id: string;
  condition: string;
  permalink: string;
  thumbnail_id: string;
  thumbnail: string;
  pictures: Picture[];
  video_id: string | null;
  accepts_mercadopago: boolean;
  non_mercado_pago_payment_methods: any[];
  shipping: Shipping;
  international_delivery_mode: string;
  seller_address: SellerAddress;
  location: Location;
  coverage_areas: any[];
  listing_source: string;
  status: string;
  warranty: string;
  catalog_product_id: string;
  domain_id: string;
  parent_item_id: string | null;
}

export interface MLItemDescription {
  text: string;
  plain_text: string;
  last_updated: string;
  date_created: string;
}
