import api from "../../../api";
import s from "../editor.module.css";
import BtnExit from "../btns/btnExit";
import EditorTitle from "../editorTitle";
import React, { useEffect, useState } from "react";
import UserForm from "./userForm";

const UserEditor = ({ userId }) => {
  const [editorUser, setEditorUser] = useState({});
  const userOnLS = JSON.parse(localStorage.getItem("user"));
  const accessToEdit = Number(userOnLS.id) === Number(userId);

  // установка редактируемого товара
  useEffect(() => {
    api.users.fetchById(userId).then((data) => {
      setEditorUser(data);
    });
  }, [userId]);

  return (
    <div className={s.editWrap}>
      {editorUser.id && accessToEdit && (
        <>
          <BtnExit />
          <EditorTitle name={"Редактор профиля"} />
          <UserForm editorUser={editorUser} />
        </>
      )}
    </div>
  );
};

export default UserEditor;
