import ProdForm from "./prodForm";
import s from "../editor.module.css";
import BtnExit from "../btns/btnExit";
import EditorTitle from "../editorTitle";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import * as React from "react";
import { Iprod } from "../../../../types/types";

const ProdEditor = () => {
  const product: Iprod = useLoaderData();
  const [editorProd, setEditorProd] = useState<Iprod>();
  const currentUser = JSON.parse(localStorage.getItem("user"));

  // установка редактируемого товара
  useEffect(() => {
    product && product._id
      ? setEditorProd({ ...product })
      : setEditorProd({
          type: "",
          name: "",
          price: 0,
          category: "",
          description: "",
          seller: currentUser,
          photo: [],
        });
  }, [product, currentUser]);

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
