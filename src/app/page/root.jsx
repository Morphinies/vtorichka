import React, { useEffect } from "react";
import Main from "./main";
import api from "../api";
import { useState } from "react";

const Root = () => {
  //дефолтные значения подбора товаров
  const [defaultConditions, setDefaultConditions] = useState();
  useEffect(() => {
    api.defaultConditions.fetchAll().then((data) => setDefaultConditions(data));
  }, [defaultConditions]);

  return defaultConditions && <Main defaultConditions={defaultConditions} />;
};

export default Root;
