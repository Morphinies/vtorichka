import React, { useState } from "react";
import CatalogBlock from "./catalog/catalogBlock";
import SortingBlock from "./sorting/sortingBlock";
import FiltersBlock from "./filters/filtersBlock";
import { useSearchParams } from "react-router-dom";

const Sidebar = () => {
  const [openedSideBar, setOpenedSideBar] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const changeOpenedSideBar = (item) => setOpenedSideBar(item);

  return (
    <aside className="sidebarWrap">
      <div className="sidebarCatalog">
        <CatalogBlock
          id="1"
          btnName="каталог"
          searchParams={searchParams}
          openedSideBar={openedSideBar}
          setSearchParams={setSearchParams}
          changeOpenedSideBar={changeOpenedSideBar}
        />
        <FiltersBlock
          id="2"
          btnName="фильтры"
          searchParams={searchParams}
          openedSideBar={openedSideBar}
          setSearchParams={setSearchParams}
          changeOpenedSideBar={changeOpenedSideBar}
        />
        <SortingBlock
          btnName="сортировка"
          searchParams={searchParams}
          openedSideBar={openedSideBar}
          setSearchParams={setSearchParams}
          changeOpenedSideBar={changeOpenedSideBar}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
