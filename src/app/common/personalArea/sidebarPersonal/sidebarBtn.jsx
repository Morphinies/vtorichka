import React from "react";
import s from "../personalArea.module.css";

const SidebarBtn = ({ btnName, openedBlock, setOpenedBlock, section }) => {
  return (
    <button
      type="button"
      onClick={() => openedBlock !== section && setOpenedBlock(section)}
      className={
        s.btnOpenBlock + " " + (openedBlock === section ? s.openedBlockBtn : "")
      }
    >
      <p className={s.btnOpenBlockText}>{btnName} </p>
    </button>
  );
};

export default SidebarBtn;
