interface Ifilters {
    name: string;
    value: {
        name: string;
        value: boolean;
    }[];
}
const filters: Ifilters[] = [
    {
        name: "тип",
        value: [
            { name: "новое", value: true },
            { name: "б/у", value: true },
        ],
    },
];

const fetchAll = (): Promise<Ifilters[]> =>
    new Promise((resolve) => {
        window.setTimeout(() => {
            resolve(filters);
        }, 100);
    });

const filtersList = { fetchAll };

export default filtersList;
