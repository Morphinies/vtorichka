import * as React from "react";
import Catalog from "./catalog";
import s from "../sidebar.module.css";
import BtnDisplayBlock from "../btnDisplayBlock";
import { useSearchParams } from "react-router-dom";
import { ICatalogBlock } from "../../../../../types/types";

const CatalogBlock = ({
    id,
    btnName,
    openedSideBar,
    changeOpenedSideBar,
}: ICatalogBlock): JSX.Element => {
    const isOpenedSideBar = openedSideBar === btnName;
    const [searchParams, setSearchParams] = useSearchParams();

    const openBlock = () => {
        changeOpenedSideBar(isOpenedSideBar ? "" : btnName);
    };

    return (
        <div className={s.sidebarItem} id={s["sidebarItem" + id]}>
            <BtnDisplayBlock
                btnName={btnName + (searchParams.get("category") ? " *" : "")}
                blockHidden={openedSideBar !== btnName}
                hideBlock={() => openBlock()}
            />

            {isOpenedSideBar && (
                <Catalog
                    searchParams={searchParams}
                    hideCatalog={() => openBlock()}
                    setSearchParams={setSearchParams}
                />
            )}
        </div>
    );
};

export default CatalogBlock;
