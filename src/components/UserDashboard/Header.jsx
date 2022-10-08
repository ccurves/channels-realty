import React from "react";
import { isAuth } from "../../helpers/auth";

const Header = () => {
  return (
    <div class="">
      <div class="content container" style={{ height: "25rem" }}>
        <div class="page-header  page-header-reset">
          <div class="row align-items-center">
            <div class="col">
              <h1 class="page-header-title">
                Welcome back,{" "}
                {isAuth().firstname.charAt(0).toUpperCase() +
                  isAuth().firstname.slice(1)}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
