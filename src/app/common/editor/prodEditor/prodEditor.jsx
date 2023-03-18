import api from "../../../api";
import ProdForm from "./prodForm";
import s from "../editor.module.css";
import BtnExit from "../btns/btnExit";
import EditorTitle from "../editorTitle";
import React, { useEffect, useState } from "react";

const ProdEditor = ({ prodId }) => {
  const [editorProd, setEditorProd] = useState();

  // установка редактируемого товара
  useEffect(() => {
    api.products.fetchById(prodId).then((data) => {
      setEditorProd(data);
    });
  }, [prodId]);

  return (
    <div className={s.editWrap}>
      {editorProd && (
        <>
          <BtnExit />
          <EditorTitle name={"Редактор объявлений"} />
          <ProdForm editorProd={editorProd} />
        </>
      )}
    </div>
  );
};

export default ProdEditor;
