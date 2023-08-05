import users from "./api/users.api";
import products from "./api/products.api";
import filterList from "./api/filters.api";
import favorites from "./api/favorites.api";
import sortingList from "./api/sortings.api";
import categoryList from "./api/categories.api";
import defaultConditions from "./api/defaultConditions.api";

const api = {
    users,
    products,
    favorites,
    filterList,
    sortingList,
    categoryList,
    defaultConditions,
};

export default api;
