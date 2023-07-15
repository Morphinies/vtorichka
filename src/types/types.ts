export interface Iprod {
  category: string;
  data: string;
  description: string;
  name: string;
  photo?: [];
  place: string;
  price: number;
  seller: string;
  type: string;
  __v?: number;
  _id: string;
}

export interface IBtnChangePhoto {
  x: number;
  setX: (x: number) => void;
  maxVal: number;
  change: "prev" | "next";
  prod: Iprod;
}

export interface IProdInfo {
  isFavorite: boolean;
  updateFavorites: (id: string) => void;
  prod: Iprod;
}

export interface IProdItem extends IProdInfo {
  maxVal: number;
}

export type ProdPhotoType = Omit<IBtnChangePhoto, "change">;
