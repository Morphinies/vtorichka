// buttons

export interface IHeadBtn {
    icon?: string;
    name: string;
    link: string;
    action?: () => void;
}
export interface IBtnDisplayBlock {
    btnName: string;
    blockHidden: boolean;
    hideBlock: () => void;
}

export interface IBtnsChangeImg {
    imgTotal: number;
    showedImg: number;
    imgBack: () => void;
    imgForward: () => void;
}

export interface IBtnFavorite {
    isFavorite: boolean;
    updateFavorite: () => void;
}

export interface IBtnsOfProd {
    product: Iprod;
    seller: Iseller;
    isFavorite: boolean;
    updateFavorite: () => void;
}

export interface IBtnChangePhoto {
    x: number;
    prod: Iprod;
    maxVal: number;
    change: "prev" | "next";
    setX: (x: number) => void;
}

export type ProdPhotoType = Omit<IBtnChangePhoto, "change">;

export interface IProdPhotoBtn {
    prod: Iprod;
}

export interface IBtnAuth {
    name: string;
    isValid: boolean;
}

export interface ICatFieldBtnOpenList {
    setListOpened: (v: (t: boolean) => boolean) => void;
    listOpened: boolean;
    catValue: string;
}

export interface IConditionBtn {
    cond: IcondType;
    clearCondition: (v: string) => void;
}

export interface ISidebarBtn {
    link: string;
    btnName: string;
}

// products

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

export interface IProdInfo {
    prod: Iprod;
    isFavorite?: boolean;
    updateFavorites?: (id: string) => void;
}

export interface IProdItem extends IProdInfo {
    maxVal: number;
}

export interface IProductsNumb {
    productsNumbOnPage: number;
    setProductsNumbOnPage: (val: number) => void;
}

export interface IProductsNav extends IProductsNumb {
    pageNumbersArr: number[];
}

export interface IProductsPages {
    pageNumbersArr: number[];
}

export interface IProducts {
    prodList: Iprod[];
}

export interface IProductsList {
    productsOnPage: Iprod[];
}

export interface IProdMainInfo {
    place: string;
    category: string;
    type: string;
}

// authorization

export interface ILogupform {
    login?: string;
    password?: string;
}

export interface ILogupError {
    login?: IProdFormErr;
    password?: IProdFormErr;
}

export interface ISignupForm {
    name?: string;
    email?: string;
    password?: string;
    rePassword?: string;
}

export interface ISignupFormErrors {
    name?: IProdFormErr;
    email?: IProdFormErr;
    password?: IProdFormErr;
    rePassword?: IProdFormErr;
}

// auth input fields

export interface ITextField {
    type: string;
    label: string;
    formName?: string;
    maxLength: number;
    formValue: string;
    error: IProdFormErr;
    clearErr?: (val: string) => void;
    setFormValues: React.Dispatch<
        React.SetStateAction<Iprod | IUserFormValues>
    >;
}

// edit input fields

export interface ICatField {
    label: string;
    error: string;
    catValue: string;
    errorsHidden: boolean;
    setFormValues: React.Dispatch<React.SetStateAction<Iprod>>;
}

export interface IChangePassword {
    pasField: string;
    errorsHidden: boolean;
    formValues: IChangePasswordForm | IUserFormValues;
    errors: IChangePasswordFormErr | IUserFormValuesErrors;
    setPasField: React.Dispatch<React.SetStateAction<string>>;
    setFormValues: React.Dispatch<React.SetStateAction<IChangePasswordForm>>;
}

export interface IPasswordField extends Omit<ITextareaField, "setFormValues"> {
    setFormValues: React.Dispatch<React.SetStateAction<IChangePasswordForm>>;
}

export interface IdefFieldProps {
    label: string;
    fieldId?: string;
    formValue: string;
    setFormValues: React.Dispatch<
        React.SetStateAction<Iprod | IUserFormValues>
    >;
}

export interface ITextareaField extends IdefFieldProps {
    maxLength: number;
    error: IProdFormErr;
    errorsHidden?: boolean;
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

// edit form

export interface IProdForm {
    editorProd: Iprod;
}

//user edit form

export interface IUserFormValues {
    _id?: string;
    phone?: string;
    photo?: string;
    name?: string;
    avatar?: string;
    rating?: number;
    about?: string;
    password?: string;
    oldPas?: string;
    newPas?: string;
}
export interface IUserFormValuesErrors {
    _id?: IProdFormErr;
    phone?: IProdFormErr;
    photo?: IProdFormErr;
    name?: IProdFormErr;
    avatar?: IProdFormErr;
    rating?: IProdFormErr;
    about?: IProdFormErr;
    password?: IProdFormErr;
    oldPas?: IProdFormErr;
    newPas?: IProdFormErr;
}

// conditions to choose goods

export interface IcondType {
    name?: string;
    value?: string;
    key?: string;
}

// search

export interface ISearchInput {
    textSearch: string;
    setTextSearch: (v: string) => void;
}

export interface ISearchForm extends ISearchInput {}

export interface IDropDownList extends ISearchInput {
    selectedList: Iprod[];
}

// catalog

export interface IcatItem {
    name?: string;
    value?: IcatItem[];
}

export interface ICatFieldList {
    catList: IcatItem[];
    formValue: string;
    hideCatalog: () => void;
    setFormValues: React.Dispatch<React.SetStateAction<Iprod>>;
}

export interface ICatFieldBtn extends Omit<ICatFieldList, "catList"> {
    catItem: IcatItem;
    curCat: IcatItem[];
    visableCatList: IcatItem[];
    setVisableCatListDefault: () => void;
    setVisableCatList: (v: IcatItem[]) => void;
    setCurCat: React.Dispatch<React.SetStateAction<IcatItem[]>>;
}

export interface ICatalog {
    curCat: IcatItem[];
    catList: IcatItem[];
    hideCatalog: () => void;
    searchParams: URLSearchParams;
    setCatListDefault: () => void;
    setCatList: (v: IcatItem[]) => void;
    setSearchParams: (v: URLSearchParams) => void;
    setCurCat: React.Dispatch<React.SetStateAction<IcatItem[]>>;
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

// filters

export interface IBtnApplyFilters {
    img: string;
    name: string;
    action: () => void;
}

export interface IBtnClearInput {
    value: string;
    clearFilter: (v: string) => void;
}

export interface IBtnOpenFilter {
    name: string;
    isOpen: boolean;
    action: (v: string) => void;
}

export interface IBtnsApplyFilters {
    applyFilters: () => void;
    clearFilters: () => void;
}

export interface IInputPrice {
    name: string;
    value: string;
    formData: IfiltersForm;
    setFormData: React.Dispatch<React.SetStateAction<IfiltersForm>>;
}

export interface IPriceFilter {
    isOpen: boolean;
    formData: IfiltersForm;
    openFilter: (v: string) => void;
    setFormData: (v: IfiltersForm) => void;
}

export interface ICheckBox {
    name: string;
    formData: IfiltersForm;
    tick: (v: string) => void;
}

export interface IInputType {
    formData: IfiltersForm;
    setFormData: (v: (k: IfiltersForm) => IfiltersForm) => void;
}

export interface ITypeFilter {
    isOpen: boolean;
    formData: IfiltersForm;
    openFilter: (v: string) => void;
    setFormData: React.Dispatch<React.SetStateAction<IfiltersForm>>;
}

export interface IFilters {
    openedFilter: string;
    formData: IfiltersForm;
    clearFilters: () => void;
    applyFilters: () => void;
    openFilter: (v: string) => void;
    setFormData: React.Dispatch<React.SetStateAction<IfiltersForm>>;
}

// sorting

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

export interface ISorting {
    sort: (val: string) => void;
    activeSort: string;
}

export interface ISortingBlock {
    btnName: string;
    searchParams: URLSearchParams;
    openedSideBar: string;
    setSearchParams: (v: URLSearchParams) => void;
    changeOpenedSideBar: (v: string) => void;
}

export interface ISortingItem {
    sort: (val: string) => void;
    sortingItem: {
        name: string;
        img: string;
    };
    activeSort: string;
}

// seller
export interface Iseller {
    _id?: string;
    phone?: string;
    photo?: string;
    name?: string;
    avatar?: string;
    rating?: number;
    about?: string;
    email?: string;
    password?: string;
    products: string[];
    favorites?: string[];
}

// errors
export interface Ierror {
    name?: IProdFormErr;
    login?: IProdFormErr;
    email?: IProdFormErr;
    password?: IProdFormErr;
    rePassword?: IProdFormErr;
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

//forms

export interface IChangePasswordFormErr {
    oldPas: IProdFormErr;
    newPas: IProdFormErr;
}

export interface IChangePasswordForm {
    oldPas?: string;
    newPas: string;
}
