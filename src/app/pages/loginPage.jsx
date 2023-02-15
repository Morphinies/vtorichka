import React from "react";
import Login from "../common/auth/login";
import Footer from "../common/footer/footer";
import Header from "../common/header/header";

const LoginPage = () => {
  return (
    <div className="wrapper">
      <Header />
      <Login />
      <Footer />
    </div>
  );
};

export default LoginPage;
