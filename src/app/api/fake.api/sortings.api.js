import sortArrowImg from "../../img/arrowSort.svg";
import sortArrowDownImg from "../../img/arrowSortDown.svg";

const sortings = [
  { value: "дате (c новых)", img: sortArrowDownImg },
  { value: "дате (со старых)", img: sortArrowImg },
  { value: "цене (с дорогих)", img: sortArrowDownImg },
  { value: "цене (с дешевых)", img: sortArrowImg },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(sortings);
    }, 500);
  });
const sortingList = { fetchAll };

export default sortingList;
