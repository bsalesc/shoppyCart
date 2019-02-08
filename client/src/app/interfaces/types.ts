export interface BaseModel {
  id: string;
}

export interface Item extends BaseModel {
  description: string;
  quantity?: number;
  bought: boolean;
  price?: number;
}

export interface Category extends BaseModel {
  description: string;
}

export interface User {
  email: string;
  pass: string;
  name: string;

  token?: string;
}

export interface Menu {
  description: string;
  url: string;
  allowed: boolean;
}
