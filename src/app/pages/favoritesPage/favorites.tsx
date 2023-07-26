import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigation } from "react-router-dom";
import Products from "../../common/prodList/products";
import { Iprod } from "../../../types/types";
import api from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { addCustomerAction } from "../../../store/customerReducer";

const Favorites = () => {
  const dispatch = useDispatch();
  const cash = useSelector((state: any) => state.cash.cash);
  const customers = useSelector((state: any) => state.customers.customers);
  console.log(customers);

  const navigation = useNavigation();
  const [favoriteProdList, setFavoriteProdList] = useState<Iprod[]>([]);

  useEffect(() => {
    api.products.fetchFavorites().then((data) => setFavoriteProdList(data));
  }, []);

  const addCash = (cash: number) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };

  const getCash = (cash: number) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  const addCustomer = (name: string) => {
    dispatch(addCustomerAction({ name, id: Date.now() }));
  };

  const delCustomer = (id: number) => {
    dispatch({ type: "DEL_CUSTOMER", payload: id });
  };

  return (
    <main
      className={"main " + (navigation.state === "loading" ? "loading" : "")}
    >
      <Products prodList={favoriteProdList} />
      <div></div>
      <div style={{ margin: "auto" }}>
        <h1>{cash}</h1>
        <div style={{ display: "flex", margin: "auto" }}>
          <button onClick={() => addCash(Number(prompt()))}>add cash</button>
          <button onClick={() => getCash(Number(prompt()))}>get cash</button>
          <button onClick={() => addCustomer(prompt())}>add client</button>
          <button onClick={() => getCash(Number(prompt()))}>del client</button>
        </div>
        <div>
          {!customers ? (
            <p>клиенты отсутствуют</p>
          ) : (
            <div>
              {customers.map((customer: { name: string; id: number }) => {
                return (
                  <button
                    key={customer.id}
                    onClick={() => delCustomer(customer.id)}
                    style={{ display: "block", margin: "10px auto" }}
                  >
                    {customer.name}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Favorites;
