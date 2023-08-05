import { IcatItem } from "../../../types/types";

const categories: IcatItem[] = [
    {
        name: "одежда",
        value: [
            {
                name: "рубашка",
                value: [{ name: "в клеточку", value: [{ name: "тряпочная" }] }],
            },
            {
                name: "брюки",
                value: [
                    { name: "чёрные", value: [{ name: "джинсовые" }] },
                    { name: "белые" },
                ],
            },
            { name: "носки" },
        ],
    },
    { name: "обувь", value: [{ name: "кеды" }, { name: "кросовки" }] },
    {
        name: "электроника",
        value: [{ name: "компьютер" }, { name: "телефон" }],
    },
    { name: "украшения", value: [{ name: "кольцо" }] },
];

const fetchAll = (): Promise<IcatItem[]> =>
    new Promise((resolve) => {
        window.setTimeout(() => {
            resolve(categories);
        }, 100);
    });
const categoryList = { fetchAll };

export default categoryList;
