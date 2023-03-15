import React from "react";
import User from "./user/user";
import MySales from "./mySales/mySales";
import s from "./personalPage.module.css";
import MySidebar from "./mySidebar/mySidebar";
import { useLocation } from "react-router-dom";
import Header from "../../common/header/header";
import Footer from "../../common/footer/footer";
import UserProducts from "./myProducts/myProducts";

const PersonalPage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const location = useLocation().pathname.slice(9);

  return (
    user && (
      <div className="wrapper">
        <Header />
        <main className={s.main}>
          <MySidebar />
          {user && (
            <>
              {location === "/bio" && (
                <User
                  rating={1.5}
                  name={user.name}
                  reviewsNumb={24}
                  about={user.about}
                  photo={user.avatar}
                />
              )}
              {location === "/products" && <UserProducts userID={user.id} />}
              {location === "/sales" && <MySales userID={user.id} />}
            </>
          )}
        </main>
        <Footer />
      </div>
    )
  );
};

export default PersonalPage;
