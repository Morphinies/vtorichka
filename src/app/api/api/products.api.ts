import { Iprod } from "../../../types/types";

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

async function deleteById(id: string) {
  const response = await fetch("http://localhost:7000/api/products/" + id, {
    method: "DELETE",
    headers: { Accept: "application/json" },
  });
  if (response.ok === true) {
    const product = await response.json();
    return product;
  } else {
    const err = await response.text();
    return Promise.reject(err);
  }
}

async function fetchBySeller(userID: string) {
  const response = await fetch(
    "http://localhost:7000/api/products/bySeller/" + userID,
    { method: "GET", headers: { Accept: "application/json" } }
  );
  if (response.ok === true) {
    const products = await response.json();
    return products;
  }
}

async function fetchByName(name: string) {
  const response = await fetch(
    "http://localhost:7000/api/products/byName/" + name,
    {
      method: "GET",
      headers: { Accept: "application/json" },
    }
  );
  if (response.ok === true) {
    const searchedProducts = await response.json();
    return searchedProducts;
  }
}

async function fetchByParams(searchStr: string) {
  let url = "http://localhost:7000/api/products/" + searchStr;

  const response = await fetch(url, {
    method: "GET",
    headers: { Accept: "application/json" },
  });
  if (response.ok === true) {
    const products = await response.json();
    return products;
  }
}

async function editProd(prod: string) {
  const response = await fetch("http://localhost:7000/api/products/editProd", {
    method: "PUT",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(prod),
  });
  if (response.ok === true) {
    const editedProd = await response.json();
    return editedProd;
  }
}

async function addProd(prod: string) {
  const response = await fetch("http://localhost:7000/api/products/addProd", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(prod),
  });
  if (response.ok === true) {
    const editedProd = await response.json();
    return editedProd;
  }
}

const products = {
  addProd,
  fetchAll,
  editProd,
  fetchById,
  fetchByName,
  fetchBySeller,
  fetchByParams,
  deleteById,
};

export default products;
