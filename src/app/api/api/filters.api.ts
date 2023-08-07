interface Ifilters {
    name: string;
    value: {
        name: string;
        value: boolean;
    }[];
}
const filtersList: Ifilters[] = [
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
            resolve(filtersList);
        }, 100);
    });

const filters = { fetchAll };

export default filters;
