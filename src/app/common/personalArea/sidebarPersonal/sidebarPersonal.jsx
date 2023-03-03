import React from "react";
import SidebarBtn from "./sidebarBtn";
import s from "../personalArea.module.css";

const SidebarPersonal = ({ openedBlock, setOpenedBlock }) => {
  return (
    <aside className={s.aside}>
      <SidebarBtn
        section="user"
        btnName="личные данные"
        openedBlock={openedBlock}
        setOpenedBlock={setOpenedBlock}
      />
      <SidebarBtn
        section="myProducts"
        btnName="мои товары"
        openedBlock={openedBlock}
        setOpenedBlock={setOpenedBlock}
      />
      <SidebarBtn
        section="sales"
        btnName="продажи"
        openedBlock={openedBlock}
        setOpenedBlock={setOpenedBlock}
      />
    </aside>
  );
};

export default SidebarPersonal;
