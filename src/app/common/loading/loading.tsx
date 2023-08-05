import * as React from "react";
import s from "./loading.module.css";
import { useState, useEffect } from "react";

const Loading = (): JSX.Element => {
    //анимация загрузки "Точки"
    const [pointsNumb, setPointsNumb] = useState<number>(1);

    useEffect(() => {
        pointsNumb === 4 && setPointsNumb(1);
    }, [pointsNumb]);

    setTimeout(() => {
        setPointsNumb(pointsNumb + 1);
    }, 500);

    return (
        <div className={s.loading}>
            <h2 className={s.loadingText}>
                Загрузка
                <span className={s.loadingPointsNumb}>
                    {".".repeat(pointsNumb)}
                </span>
            </h2>
        </div>
    );
};

export default Loading;
