import React from "react";
import SignUp from "../common/auth/signUp";
import Footer from "../common/footer/footer";
import Header from "../common/header/header";
const userIsAuth = !!JSON.parse(localStorage.getItem("user"));

const SignUpPage = () => {
  return (
    <div className="wrapper">
      <Header />
      {!userIsAuth && <SignUp />}
      <Footer />
    </div>
  );
};

export default SignUpPage;
