import React, { useState } from "react";
import User from "./user/user";
import s from "./personalArea.module.css";

const PersonalArea = () => {
  const user = JSON.parse(localStorage.getItem("user_vt"));
  const [openSection, setOpenSection] = useState();
  console.log(user);

  return (
    <main className={s.main}>
      <User user={user} />
    </main>
  );
};

export default PersonalArea;
