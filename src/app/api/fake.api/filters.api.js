const filters = ["цена"];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(filters);
    }, 500);
  });
const filtersList = { fetchAll };

export default filtersList;
