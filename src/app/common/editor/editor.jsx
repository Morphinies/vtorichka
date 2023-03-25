import React, { useEffect } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import ProdEditor from "./prodEditor/prodEditor";
import { useKeyPress } from "../hooks/useKeyPress";
import { useLocation, useNavigate } from "react-router-dom";
import UserEditor from "./userEditor/userEditor";

const Editor = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isEscPressed = useKeyPress("Escape");
  console.log(location);

  // отслеживание нажатия на "Escape"
  useEffect(() => {
    isEscPressed && navigate(-1);
  }, [isEscPressed, navigate]);

  // проверка url для определения на какой редактор перенаправить user`a
  const prodId =
    /^\/prodEditor\//.test(location.pathname) && location.pathname.slice(12);

  const userId =
    /^\/userEditor\//.test(location.pathname) && location.pathname.slice(12);

  return (
    <div className="wrapper">
      <Header />
      {prodId && <ProdEditor prodId={prodId} />}
      {userId && <UserEditor userId={userId} />}
      <Footer />
    </div>
  );
};

export default Editor;
