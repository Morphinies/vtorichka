import React from "react";
import Footer from "../common/footer/footer";
import Header from "../common/header/header";
import PersonalArea from "../common/personalArea/personalArea";

const PersonalAreaPage = () => {
  return (
    <div className="wrapper">
      <Header />
      <PersonalArea />
      <Footer />
    </div>
  );
};

export default PersonalAreaPage;
