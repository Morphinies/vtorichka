import React from "react";
import User from "./user/user";
import s from "./personalArea.module.css";
import UserSections from "./userSections/userSections";

const PersonalArea = () => {
  const user = JSON.parse(localStorage.getItem("user_vt"));
  console.log(user);

  return (
    <main className={s.main}>
      <User user={user} />
      <UserSections
        favoriteList={user.favoriteList}
        userProducts={user.products}
      />
    </main>
  );
};

export default PersonalArea;
