import React from "react";
import User from "./user/user";
import s from "./personalArea.module.css";

const PersonalArea = () => {
  const user = JSON.parse(localStorage.getItem("user_vt"));
  console.log(user);

  return (
    <main className={s.main}>
      <User
        photo={user.avatar}
        name={user.name}
        reviewsNumb={24}
        rating={1.5}
        about={user.about}
      />
    </main>
  );
};

export default PersonalArea;
