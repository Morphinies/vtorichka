import * as React from "react";
import { useState } from "react";
import CatalogBlock from "./catalog/catalogBlock";
import SortingBlock from "./sorting/sortingBlock";
import FiltersBlock from "./filters/filtersBlock";

const Sidebar = (): JSX.Element => {
    const [openedSideBar, setOpenedSideBar] = useState<string>("");
    const changeOpenedSideBar = (item: string) => setOpenedSideBar(item);

    return (
        <aside className="sidebarWrap">
            <div className="sidebarCatalog">
                <CatalogBlock
                    id="1"
                    btnName="каталог"
                    openedSideBar={openedSideBar}
                    changeOpenedSideBar={changeOpenedSideBar}
                />
                <FiltersBlock
                    id="2"
                    btnName="фильтры"
                    openedSideBar={openedSideBar}
                    changeOpenedSideBar={changeOpenedSideBar}
                />
                <SortingBlock
                    btnName="сортировка"
                    openedSideBar={openedSideBar}
                    changeOpenedSideBar={changeOpenedSideBar}
                />
            </div>
        </aside>
    );
};

export default Sidebar;
