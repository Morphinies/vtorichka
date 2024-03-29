import sortArrowImg from "../../img/arrowSort.svg";
import sortArrowDownImg from "../../img/arrowSortDown.svg";

export interface IsortsItem {
    name: string;
    img: string;
}
const sortings: IsortsItem[] = [
    { name: "с новых", img: sortArrowDownImg },
    { name: "со старых", img: sortArrowImg },
    { name: "с дорогих", img: sortArrowDownImg },
    { name: "с дешевых", img: sortArrowImg },
];

const fetchAll = (): Promise<IsortsItem[]> =>
    new Promise((resolve) => {
        window.setTimeout(() => {
            resolve(sortings);
        }, 100);
    });
const sortingList = { fetchAll };

export default sortingList;
