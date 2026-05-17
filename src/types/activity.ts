export type Activity = {
  id: string;

  title: string;

  location: string;

  date: string;

  price: string;

  priceValue: number;

  category: string;

  status: "Open" | "Closed";

  image: string;
};