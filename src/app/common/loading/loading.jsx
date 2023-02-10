import React, { useEffect } from "react";
import { useState } from "react";
import s from "./loading.module.css";

const Loading = () => {
  const [pointsNumb, setPointsNumb] = useState(1);

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
        <span className={s.loadingPointsNumb}>{".".repeat(pointsNumb)}</span>
      </h2>
    </div>
  );
};

export default Loading;
