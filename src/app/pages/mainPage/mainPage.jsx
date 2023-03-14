import Main from "./main";
import api from "../../api";
import Footer from "../../common/footer/footer";
import Header from "../../common/header/header";
import Loading from "../../common/loading/loading";
import React, { useEffect, useState } from "react";

const MainPage = () => {
  //дефолтные значения подбора товаров
  const [defaultConditions, setDefaultConditions] = useState();
  useEffect(() => {
    api.defaultConditions.fetchAll().then((data) => setDefaultConditions(data));
  }, [defaultConditions]);

  localStorage.clear(); // отключить запоминание действий

  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        {defaultConditions ? (
          <Main defaultConditions={defaultConditions} />
        ) : (
          <Loading />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default MainPage;
