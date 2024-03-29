import users from "./api/users.api";
import products from "./api/products.api";
import filters from "./api/filters.api";
import favorites from "./api/favorites.api";
import sortingList from "./api/sortings.api";
import filtersList from "./api/filtersList.api";
import categoryList from "./api/categories.api";
import defaultConditions from "./api/defaultConditions.api";

const api = {
    users,
    filters,
    products,
    favorites,
    sortingList,
    filtersList,
    categoryList,
    defaultConditions,
};

export default api;
