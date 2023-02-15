import React from "react";
import SignUp from "../common/auth/signUp";
import Footer from "../common/footer/footer";
import Header from "../common/header/header";

const SignUpPage = () => {
  return (
    <div className="wrapper">
      <Header />
      <SignUp />
      <Footer />
    </div>
  );
};

export default SignUpPage;
