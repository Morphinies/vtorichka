import * as React from "react";
import UserForm from "./userForm";
import s from "../editor.module.css";
import BtnExit from "../btns/btnExit";
import EditorTitle from "../editorTitle";
import { useLoaderData } from "react-router-dom";
import { Iseller } from "../../../../types/types";

const UserEditor = () => {
  const user = useLoaderData() as Iseller;

  return (
    <div className={s.editWrap}>
      {user._id && (
        <>
          <BtnExit />
          <EditorTitle name={"Редактор профиля"} />
          <UserForm editorUser={user} />
        </>
      )}
    </div>
  );
};

export default UserEditor;
