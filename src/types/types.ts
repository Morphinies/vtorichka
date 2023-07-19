export interface Iprod {
  category?: string;
  data?: string;
  description?: string;
  name?: string;
  photo?: [];
  place?: string;
  price?: string;
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
  isFavorite?: boolean;
  updateFavorites?: (id: string) => void;
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
  error: IProdFormErr;
  formName?: string;
  maxLength: number;
  formValue: string;
  clearErr?: (val: string) => void;
  setFormValues: React.Dispatch<React.SetStateAction<Iprod>>;
}

export interface IProductsList {
  productsOnPage: Iprod[];
}

export interface ICatField {
  label: string;
  error: string;
  catValue: string;
  errorsHidden: boolean;
  setFormValues: React.Dispatch<React.SetStateAction<Iprod>>;
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

export interface IProdForm {
  editorProd: Iprod;
}

export interface IProdFormErr {
  name?: string;
  message?: string;
}

export interface IProdFormErrors {
  name?: IProdFormErr;
  type?: IProdFormErr;
  photo?: IProdFormErr;
  price?: IProdFormErr;
  category?: IProdFormErr;
  description?: IProdFormErr;
}

export interface Iseller {
  _id?: string;
  phone?: string;
  name?: string;
  avatar?: string;
  rating?: number;
  about?: string;
}

export interface IBtnsChangeImg {
  imgTotal: number;
  showedImg: number;
  imgBack: () => void;
  imgForward: () => void;
}

export interface ICatFieldBtnOpenList {
  setListOpened: (v: (t: boolean) => boolean) => void;
  listOpened: boolean;
  catValue: string;
}

//fields

export interface IdefFieldProps {
  label: string;
  fieldId: string;
  formValue: string;
  setFormValues: React.Dispatch<React.SetStateAction<Iprod>>;
}

export interface ITextareaField extends IdefFieldProps {
  maxLength: number;
  error: IProdFormErr;
  errorsHidden: boolean;
}

export interface ITextField extends ITextareaField {
  type: string;
}

export interface ISelectField extends IdefFieldProps {
  list: string[];
}

export interface IFileField extends Omit<IdefFieldProps, "formValue"> {
  formValue: string[];
}

export interface IChangePasswordFormErr {
  oldPas: IProdFormErr;
  newPas: IProdFormErr;
}
export interface IChangePasswordForm {
  oldPas?: string;
  newPas: string;
}

export interface IChangePassword {
  pasField: string;
  errorsHidden: boolean;
  errors: IChangePasswordFormErr;
  formValues: IChangePasswordForm;
  setPasField: React.Dispatch<React.SetStateAction<boolean>>;
  setFormValues: React.Dispatch<React.SetStateAction<IChangePasswordForm>>;
}

export interface IPasswordField extends Omit<ITextareaField, "setFormValues"> {
  setFormValues: React.Dispatch<React.SetStateAction<IChangePasswordForm>>;
}
