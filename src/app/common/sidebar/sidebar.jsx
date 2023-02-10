import React from "react";
import CatalogBlock from "./catalog/catalogBlock";
import SortingBlock from "./sorting/sortingBlock";
import FiltersBlock from "./filters/filtersBlock";

const Sidebar = ({
  openedSideBar,
  setOpenedSideBar,
  conditionsApplied,
  defaultConditions,
  setConditionsApplied,
}) => {
  return (
    <aside className="sidebarWrap">
      <div className="sidebarCatalog">
        <CatalogBlock
          id="1"
          btnName="каталог"
          openedSideBar={openedSideBar}
          changeOpenedSideBar={(el) => {
            return setOpenedSideBar(el);
          }}
          conditionsApplied={conditionsApplied}
          setConditionsApplied={setConditionsApplied}
          defaultCategory={defaultConditions.category}
        />
        <FiltersBlock
          id="2"
          btnName="фильтры"
          openedSideBar={openedSideBar}
          conditionsApplied={conditionsApplied}
          changeOpenedSideBar={(el) => {
            return setOpenedSideBar(el);
          }}
          defaultFilters={defaultConditions.filters}
          setConditionsApplied={setConditionsApplied}
        />
        <SortingBlock
          btnName="сортировка"
          openedSideBar={openedSideBar}
          changeOpenedSideBar={(el) => {
            return setOpenedSideBar(el);
          }}
          conditionsApplied={conditionsApplied}
          defaultSorting={defaultConditions.sorting}
          setConditionsApplied={setConditionsApplied}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
