const filters = ["minPrice", "maxPrice", "type"];

const fetchAll = (): Promise<string[]> =>
    new Promise((resolve) =>
        window.setTimeout(() => {
            resolve(filters);
        }, 1000)
    );

const filtersList = { fetchAll };
export default filtersList;
