import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import s from "./products.module.css";
import heart from "../../img/heart.svg";
// import heartFill from "../../img/heartFill.svg";
import productsList from "../../api/fake.api/products.api";

const Products = ({ conditions }) => {
  const [choosedPage, setChoosedPage] = useState(1);
  const [allProducts, setAllProducts] = useState([]);
  const [sortProducts, setSortProducts] = useState([]);
  const [productsOnPage, setProductsOnPage] = useState([]);
  const [filtByCatProducts, setFiltByCatProducts] = useState([]);
  const [filtByFiltProducts, setFiltByFiltProducts] = useState([]);
  const [productsNumbOnPage, setProductsNumbOnPage] = useState(5);

  const regExpPrice = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const getMonth = (monthNumb) => {
    switch (monthNumb) {
      case 1:
        return "янв";
      case 2:
        return "фев";
      case 3:
        return "мар";
      case 4:
        return "апр";
      case 5:
        return "май";
      case 6:
        return "июн";
      case 7:
        return "июл";
      case 8:
        return "авг";
      case 9:
        return "сен";
      case 10:
        return "окт";
      case 11:
        return "ноя";
      case 12:
        return "дек";
      default:
        return "";
    }
  };

  const sortArrBy = (arr, by) => {
    //sorting
    switch (by) {
      case "c новых":
        return arr.sort(function (a, b) {
          return Date.parse(b.time) - Date.parse(a.time);
        });
      case "со старых":
        return arr.sort(function (a, b) {
          return Date.parse(a.time) - Date.parse(b.time);
        });
      case "с дорогих":
        return arr.sort(function (a, b) {
          return b.price - a.price;
        });
      case "с дешевых":
        return arr.sort(function (a, b) {
          return a.price - b.price;
        });
      default:
        return null;
    }
  };

  //загрузка списка товаров
  useEffect(() => {
    productsList.fetchAll().then((data) => {
      setAllProducts(data);
    });
  }, []);

  //обновления списка товаров в зависимости от задания сортировки
  useEffect(() => {
    setSortProducts([...sortArrBy(allProducts, conditions.sorting.value)]);
  }, [allProducts, conditions.sorting.value]);

  //обновления списка товаров в зависимости от задания категории
  useEffect(() => {
    if (conditions.category.name) {
      setFiltByCatProducts([
        ...sortProducts.filter(
          (product) => product.category === conditions.category.name
        ),
      ]);
    } else {
      setFiltByCatProducts([...sortProducts]);
    }
  }, [sortProducts, conditions.category.name]);

  //обновления списка товаров в зависимости от задания сортировки
  useEffect(() => {
    conditions.filters.map((filter) => {
      filter.name === "тип" &&
        filter.value.map(
          (type) =>
            type.value &&
            setFiltByFiltProducts(
              filtByCatProducts.filter((product) => product.type === type.name)
            )
        );
      filter.name === "цена" &&
        filter.id === "от" &&
        setFiltByFiltProducts((prevState) =>
          prevState.filter((product) => product.price >= filter.value)
        );
      filter.name === "цена" &&
        filter.id === "до" &&
        setFiltByFiltProducts((prevState) =>
          prevState.filter((product) => product.price <= filter.value)
        );
      return "";
    });
  }, [filtByCatProducts, conditions.filters]);

  //обновления списка товаров одной страницы в зависимости от товара/страницы/кол-ва товаров
  useEffect(() => {
    setProductsOnPage(
      filtByFiltProducts.slice(
        (choosedPage - 1) * productsNumbOnPage,
        (choosedPage - 1) * productsNumbOnPage + productsNumbOnPage
      )
    );
  }, [filtByFiltProducts, choosedPage, productsNumbOnPage]);

  const pageNumbersArr = (productsLength, productsNumbOnPage) => {
    const pageNumb = Math.ceil(productsLength / productsNumbOnPage);
    const pageNumbArr = [];
    for (let i = 1; i <= pageNumb; i++) {
      pageNumbArr.push(i);
    }
    return pageNumbArr;
  };

  return (
    <div className={s.productsWrap}>
      {/*список товаров на странице*/}
      <ul className={s.products}>
        {productsOnPage.length > 0 &&
          productsOnPage.map((i) => (
            <li key={i.id} className={s.productCard}>
              <button className={s.productPhotoWrap}>
                <img className={s.productPhoto} src={i.photo} alt="" />
              </button>
              <div className={s.productInfoWrap}>
                <button className={s.productName}>{i.name}</button>
                <p className={s.productPrice}>{regExpPrice(i.price)} р.</p>
                <div className={s.moreInfoWrap}>
                  <p className={s.place}> {i.place} </p>
                  <p className={s.time}>
                    {i.time.getDate() +
                      " " +
                      getMonth(i.time.getMonth() + 1) +
                      (String(i.time.getHours()).length === 1 ? " 0" : " ") +
                      i.time.getHours() +
                      (String(i.time.getMinutes()).length === 1 ? ":0" : ":") +
                      i.time.getMinutes()}
                  </p>
                  <img src={heart} alt="" className={s.likeImg} />
                </div>
              </div>
            </li>
          ))}
      </ul>

      <div className={s.pageNumber}>
        {/*переход по страницам*/}
        {pageNumbersArr(filtByFiltProducts.length, productsNumbOnPage).length >
          1 && (
          <ul className={s.pageNumberList}>
            {pageNumbersArr(filtByFiltProducts.length, productsNumbOnPage).map(
              (pageNumb) => (
                <button
                  key={pageNumb}
                  onClick={() => {
                    window.scrollTo(0, "offsetTop");
                    setChoosedPage(pageNumb);
                  }}
                  className={
                    s.pageNumberItem +
                    (choosedPage === pageNumb ? " " + s.choosedPage : "")
                  }
                >
                  {pageNumb}
                </button>
              )
            )}
          </ul>
        )}
        {/*количество отображаемых карточек*/}
        <div className={s.numbOfProduct}>
          <p className={s.numbOfProductText}>По: </p>
          <ul className={s.numbOfProductList}>
            {[5, 10, 15].map((numb) => (
              <button
                key={numb}
                onClick={() => {
                  productsNumbOnPage !== numb &&
                    window.scrollTo(0, "offsetTop");
                  productsNumbOnPage !== numb && setProductsNumbOnPage(numb);
                  productsNumbOnPage !== numb && setChoosedPage(1);
                }}
                className={
                  s.numbOfProductItem +
                  (productsNumbOnPage === numb
                    ? " " + s.choosedNumbOfProductItem
                    : "")
                }
              >
                {numb}
              </button>
            ))}
          </ul>
          <p className={s.numbOfProductText}> товаров</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
