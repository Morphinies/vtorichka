import { Iprod } from "../../../types/types";
import favorites from "./favorites.api";

async function fetchAll(): Promise<Iprod[]> {
  const response = await fetch("http://localhost:7000/api/products", {
    method: "GET",
    headers: { Accept: "application/json" },
  });
  if (response.ok === true) {
    const products: Iprod[] = await response.json();
    return products;
  }
}

async function fetchFavorites(): Promise<Iprod[]> {
  const favoritesList = await favorites.fetchAll();
  if (!favoritesList.length) return [];
  const response = await fetch("http://localhost:7000/api/products/favorites", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(favoritesList),
  });
  if (response.ok === true) {
    const favoriteProdList: Iprod[] = await response.json();
    return favoriteProdList;
  }
}

async function fetchById(id: string): Promise<Iprod> {
  const response = await fetch("http://localhost:7000/api/products/" + id, {
    method: "GET",
    headers: { Accept: "application/json" },
  });
  if (response.ok === true) {
    const product: Iprod = await response.json();
    return product;
  } else {
    const err: string = await response.text();
    return Promise.reject(err);
  }
}

async function deleteById(id: string): Promise<Iprod | string> {
  const response = await fetch("http://localhost:7000/api/products/" + id, {
    method: "DELETE",
    headers: { Accept: "application/json" },
  });
  if (response.ok === true) {
    const product: Iprod = await response.json();
    return product;
  } else {
    const err: string = await response.text();
    return Promise.reject(err);
  }
}

async function fetchBySeller(userID: string): Promise<Iprod[]> {
  const response = await fetch(
    "http://localhost:7000/api/products/bySeller/" + userID,
    { method: "GET", headers: { Accept: "application/json" } }
  );
  if (response.ok === true) {
    const products: Iprod[] = await response.json();
    return products;
  }
}

async function fetchByName(name: string): Promise<Iprod[]> {
  const response = await fetch(
    "http://localhost:7000/api/products/byName/" + name,
    {
      method: "GET",
      headers: { Accept: "application/json" },
    }
  );
  if (response.ok === true) {
    const searchedProducts: Iprod[] = await response.json();
    return searchedProducts;
  }
}

async function fetchByParams(searchStr: string): Promise<Iprod[]> {
  let url = "http://localhost:7000/api/products/" + searchStr;

  const response = await fetch(url, {
    method: "GET",
    headers: { Accept: "application/json" },
  });
  if (response.ok === true) {
    const products: Iprod[] = await response.json();
    return products;
  }
}

async function editProd(prod: Iprod): Promise<Iprod> {
  const response = await fetch("http://localhost:7000/api/products/editProd", {
    method: "PUT",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(prod),
  });
  if (response.ok === true) {
    const editedProd: Iprod = await response.json();
    return editedProd;
  }
}

async function addProd(prod: Iprod): Promise<Iprod> {
  const response = await fetch("http://localhost:7000/api/products/addProd", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(prod),
  });
  if (response.ok === true) {
    const editedProd: Iprod = await response.json();
    return editedProd;
  }
}

const products = {
  addProd,
  fetchAll,
  editProd,
  fetchById,
  deleteById,
  fetchByName,
  fetchBySeller,
  fetchByParams,
  fetchFavorites,
};

export default products;
