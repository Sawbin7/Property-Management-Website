export interface Product {
  id: number;
  name: string;
  category: "land" | "house" | "hotel" | "flat";
  isAvailable: "available" | "booked" | "notAvailable";
  price: number;
  location: string;
  sizeSqFt: number;
  description: string;
  image: string;
  dateAdded: string;
}
