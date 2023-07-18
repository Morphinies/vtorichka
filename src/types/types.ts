export interface Iprod {
  category?: string;
  data?: string;
  description?: string;
  name?: string;
  photo?: [];
  place?: string;
  price?: number;
  seller?: string;
  type?: string;
  __v?: number;
  _id?: string;
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

export interface Ierror {
  login?: string;
  password?: string;
}

export interface Iform {
  login: string;
  password: string;
}

export interface IBtnAuth {
  name: string;
  isValid: boolean;
}

export interface ITextField {
  type: string;
  label: string;
  error: string;
  formName: string;
  maxLength: number;
  formValue: string;
  clearErr: (val: string) => void;
  setFormValues: (val: (prevState: Iform) => Iform) => void;
}

export interface IProductsList {
  productsOnPage: Iprod[];
}

export interface ICatField {
  label: string;
  error: string;
  formValue: Iform;
  errorsHidden: boolean;
  setFormValues: (val: (prevState: Iform) => Iform) => void;
}

export interface IcatItem {
  name: string;
  value?: IcatItem[];
}
export interface ICatFieldBtn {
  curCat: IcatItem[];
  catItem: IcatItem;
  setCurCat: (t: (k: IcatItem[]) => IcatItem[]) => void;
  formValue: string;
  hideCatalog: () => void;
  setFormValues: (t: (k: IcatItem[]) => IcatItem[]) => void;
  visableCatList: IcatItem[];
  setVisableCatList: (v: IcatItem[]) => void;
  setVisableCatListDefault: () => void;
}

export interface ICatFieldList {
  catList: IcatItem[];
  formValue: string;
  hideCatalog: () => void;
  setFormValues: (t: (k: IcatItem[]) => IcatItem[]) => void;
}

export interface IBtnDisplayBlock {
  btnName: string;
  blockHidden: boolean;
  hideBlock: () => void;
}

export interface ICatalog {
  curCat: IcatItem[];
  catList: IcatItem[];
  hideCatalog: () => void;
  searchParams: URLSearchParams;
  setCatListDefault: () => void;
  setCatList: (v: IcatItem[]) => void;
  setSearchParams: (v: URLSearchParams) => void;
  setCurCat: (v: (k: IcatItem[]) => IcatItem[]) => void;
}

export interface ICatalogBlock {
  id: string;
  btnName: string;
  searchParams: URLSearchParams;
  openedSideBar: string;
  setSearchParams: (v: URLSearchParams) => void;
  changeOpenedSideBar: (v: string) => void;
}

export interface ICatalogItem {
  curCat: IcatItem[];
  catItem: IcatItem;
  displayCat: (v: IcatItem) => void;
  choosedCat: string;
}

export interface IFiltersBlock {
  id: string;
  btnName: string;
  openedSideBar: string;
  searchParams: URLSearchParams;
  changeOpenedSideBar: (v: string) => void;
  setSearchParams: (v: URLSearchParams) => void;
}

export interface IfiltersForm {
  minPrice?: string;
  maxPrice?: string;
  type?: string;
}
