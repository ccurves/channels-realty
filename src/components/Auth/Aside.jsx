import React from "react";
import icon from "../../assets/illustrations/panaauth.svg";
import iconReset from "../../assets/illustrations/panareset.svg";

const Aside = ({ logo, page }) => {
  return (
    <div class="col-lg-6 d-none d-lg-flex justify-content-center align-items-center min-vh-lg-100 position-relative  px-0">
      <div class="position-absolute top-0 start-0 end-0 mt-3 mx-3">
        <div class="d-none d-lg-flex justify-content-between">
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
      </div>

      <div style={{ maxWidth: "30rem" }}>
        <div class="text-center mb-5">
          {page === "reset" ? (
            <img
              class="img-fluid"
              src={iconReset}
              alt=""
              style={{ width: "35rem" }}
              data-hs-theme-appearance="default"
            />
          ) : (
            <img
              class="img-fluid"
              src={icon}
              alt=""
              style={{ width: "35rem" }}
              data-hs-theme-appearance="default"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Aside;
