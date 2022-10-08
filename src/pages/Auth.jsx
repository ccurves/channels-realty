import React from "react";
import { Navigate } from "react-router-dom";

import logo from "../assets/img/logo.svg";
import Aside from "../components/Auth/Aside";
import Forgot from "../components/Auth/Forgot";
import Header from "../components/Auth/Header";
import Login from "../components/Auth/Login";
import Reset from "../components/Auth/Reset";
import Signup from "../components/Auth/Signup";
import { isAuth } from "../helpers/auth";

const Auth = ({ page }) => {
  return (
    <>
      {isAuth() ? (
        <Navigate to="/" />
      ) : (
        <div class="d-flex align-items-center min-h-100">
          <Header logo={logo} />
          <main id="content" role="main" class="main pt-0">
            <div class="container-fluid px-3">
              <div class="row">
                <Aside logo={logo} page={page} />
                {page === "login" && <Login />}
                {page === "signup" && <Signup />}
                {page === "forgot" && <Forgot />}
                {page === "reset" && <Reset />}
              </div>
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default Auth;
