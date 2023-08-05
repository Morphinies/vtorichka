import * as React from "react";
import s from "./editor.module.css";

const EditorTitle = ({ name }: { name: string }) => {
    return (
        <>
            <h1 className={s.editTitle}>{name}</h1>
            <hr className={s.editHr} />
        </>
    );
};

export default EditorTitle;
