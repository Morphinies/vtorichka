import React, { useState } from "react";
import User from "./user/user";
import s from "./personalArea.module.css";
import SidebarPersonal from "./sidebarPersonal/sidebarPersonal";
import MyProducts from "./myProducts/myProducts";

const PersonalArea = () => {
  const [openedBlock, setOpenedBlock] = useState("user");

  const user = JSON.parse(localStorage.getItem("user_vt"));

  return (
    <main className={s.main}>
      <SidebarPersonal
        openedBlock={openedBlock}
        setOpenedBlock={setOpenedBlock}
      />
      {openedBlock === "user" && (
        <User
          rating={1.5}
          name={user.name}
          reviewsNumb={24}
          about={user.about}
          photo={user.avatar}
        />
      )}
      {openedBlock === "myProducts" && <MyProducts userID={user.id} />}
      {openedBlock === "sales" && ""}
    </main>
  );
};

export default PersonalArea;
