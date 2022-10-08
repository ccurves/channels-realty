import React from "react";

const Header = ({ logo }) => {
  return (
    <header class="position-absolute top-0 start-0 end-0 mt-3 mx-3">
      <div class="d-flex d-lg-none justify-content-between">
        <a href="/">
          <img
            class="w-100"
            src={logo}
            alt=""
            data-hs-theme-appearance="default"
            style={{ minWidth: "7rem", maxWidth: "7rem" }}
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
