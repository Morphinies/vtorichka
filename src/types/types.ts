export interface Iprod {
  prod: {
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
  };
}

export interface IBtnChangePhoto extends Iprod {
  x: number;
  setX: (x: number) => void;
  maxVal: number;
  change: "prev" | "next";
}

export interface IProdInfo extends Iprod {
  isFavorite: boolean;
  updateFavorites: (id: string) => void;
}

export interface IProdItem extends IProdInfo {
  maxVal: number;
}

export type ProdPhotoType = Omit<IBtnChangePhoto, "change">;
