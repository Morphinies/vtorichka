import React, { useEffect } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import ProdEditor from "./prodEditor/prodEditor";
import { useKeyPress } from "../hooks/useKeyPress";
import { useLocation, useNavigate } from "react-router-dom";

const Editor = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isEscPressed = useKeyPress("Escape");

  // отслеживание нажатия на "Escape"
  useEffect(() => {
    isEscPressed && navigate(-1);
  }, [isEscPressed, navigate]);

  // проверка url для определения на какой редактор перенаправить user`a
  const prodId =
    /^\/prodEditor\//.test(location.pathname) && location.pathname.slice(12);

  return (
    <div className="wrapper">
      <Header />
      {prodId && <ProdEditor prodId={prodId} />}
      <Footer />
    </div>
  );
};

export default Editor;
