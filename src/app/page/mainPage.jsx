import api from "../api";
import Main from "../common/main/main";
import Footer from "../common/footer/footer";
import Header from "../common/header/header";
import Loading from "../common/loading/loading";
import React, { useEffect, useState } from "react";

const MainPage = () => {
  //дефолтные значения подбора товаров
  const [defaultConditions, setDefaultConditions] = useState();
  useEffect(() => {
    api.defaultConditions.fetchAll().then((data) => setDefaultConditions(data));
  }, [defaultConditions]);

  return (
    <div className="wrapper">
      <Header />
      {defaultConditions ? (
        <Main defaultConditions={defaultConditions} />
      ) : (
        <Loading />
      )}
      <Footer />
    </div>
  );
};

export default MainPage;
