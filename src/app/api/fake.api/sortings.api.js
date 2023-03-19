import sortArrowImg from "../../img/arrowSort.svg";
import sortArrowDownImg from "../../img/arrowSortDown.svg";

const sortings = [
  { value: "c новых", img: sortArrowDownImg },
  { value: "со старых", img: sortArrowImg },
  { value: "с дорогих", img: sortArrowDownImg },
  { value: "с дешевых", img: sortArrowImg },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(sortings);
    }, 100);
  });
const sortingList = { fetchAll };

export default sortingList;
