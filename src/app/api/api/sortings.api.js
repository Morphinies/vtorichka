import sortArrowImg from "../../img/arrowSort.svg";
import sortArrowDownImg from "../../img/arrowSortDown.svg";

const sortings = [
  { name: "с новых", img: sortArrowDownImg },
  { name: "со старых", img: sortArrowImg },
  { name: "с дорогих", img: sortArrowDownImg },
  { name: "с дешевых", img: sortArrowImg },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(sortings);
    }, 100);
  });
const sortingList = { fetchAll };

export default sortingList;
