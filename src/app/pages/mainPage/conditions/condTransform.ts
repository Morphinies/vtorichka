import { IcondType } from "../../../../types/types";

export default function condTransform(
    searchParams: URLSearchParams
): IcondType[] {
    const conditions: IcondType[] = [];
    for (let [key, value] of searchParams.entries()) {
        const cond: IcondType = {};
        cond.key = key;
        cond.value = value;
        switch (key) {
            case "category":
                cond.name = "категория";
                break;
            case "minPrice":
                cond.name = "цена от";
                break;
            case "maxPrice":
                cond.name = "цена до";
                break;
            case "type":
                cond.name = "тип";
                break;
            case "sort":
                cond.name = "сортировка";
                break;
            case "name":
                cond.name = "поиск";
                break;
            default:
                cond.name = undefined;
        }

        if (cond.name) {
            conditions.push(cond);
        }
    }
    return conditions;
}
