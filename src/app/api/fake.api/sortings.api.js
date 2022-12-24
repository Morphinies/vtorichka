import sortArrowImg from "../../img/arrowSort.svg";
import sortArrowDownImg from "../../img/arrowSortDown.svg";

const sortings = [
  { name: "дате (c новых)", value: "dateToDown", img: sortArrowDownImg },
  { name: "дате (со старых)", value: "dateToUp", img: sortArrowImg },
  { name: "цене (с дорогих)", value: "priceToUp", img: sortArrowDownImg },
  { name: "цене (с дешевых)", value: "priceToDown", img: sortArrowImg },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(sortings);
    }, 500);
  });
const sortingList = { fetchAll };

export default sortingList;
