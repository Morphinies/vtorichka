import React from "react";
import { Link } from "react-router-dom";
import s from "../personalPage.module.css";

const AddProdBtn = () => {
  return (
    <Link to="/prodEditor/addProd" className={"btn " + s.addProdBtn}>
      добавить товар
    </Link>
  );
};

export default AddProdBtn;
