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

async function fetchFavorites(favoritesList: string[]): Promise<Iprod[]> {
    if (!favoritesList.length) return [];
    const response = await fetch(
        "http://localhost:7000/api/products/favorites",
        {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(favoritesList),
        }
    );
    if (response.ok === true) {
        const favoriteProdList: Iprod[] = await response.json();
        return favoriteProdList;
    } else {
        const err: string = await response.text();
        return Promise.reject(err);
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
    const response = await fetch(
        "http://localhost:7000/api/products/editProd",
        {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(prod),
        }
    );
    if (response.ok === true) {
        const editedProd: Iprod = await response.json();
        return editedProd;
    }
}

async function addProd(prod: Iprod): Promise<Iprod> {
    const response = await fetch("http://localhost:7000/api/products/addProd", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(prod),
    });
    if (response.ok === true) {
        const editedProd: Iprod = await response.json();
        return editedProd;
    }
}

async function uploadPhoto(files: any, userId: string) {
    const formData = new FormData();
    formData.append("files", files);
    formData.append("userId", userId);

    const response = await fetch(
        "http://localhost:7000/api/products/uploadPhoto",
        {
            method: "POST",
            body: formData,
        }
    );
    if (response.ok === true) {
        const data = await response.json();
        return Promise.resolve(data);
    } else {
        const err: string = await response.text();
        return Promise.reject(err);
    }
}

const products = {
    addProd,
    fetchAll,
    editProd,
    fetchById,
    deleteById,
    fetchByName,
    uploadPhoto,
    fetchBySeller,
    fetchByParams,
    fetchFavorites,
};

export default products;
