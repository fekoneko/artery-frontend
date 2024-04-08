export interface User {
  id: string;
  email: string;
  name?: string;
}

export interface Good {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}
