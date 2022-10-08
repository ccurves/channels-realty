import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.svg";
import icon from "../assets/illustrations/oc-thinking.svg";
import { ArrowBackIosNewRounded } from "@mui/icons-material";

const Error500 = () => {
  const navigate = useNavigate();
  return (
    <main id="content" role="main" class="main">
      <div class="container">
        <Link to="/" class="position-absolute top-0 start-0 end-0 py-4">
          <img
            class="avatar avatar-xl avatar-4x3 avatar-centered"
            src={logo}
            alt=""
            data-hs-theme-appearance="default"
          />
        </Link>

        <div class="footer-height-offset d-flex justify-content-center align-items-center flex-column">
          <div class="row justify-content-center align-items-sm-center w-100">
            <div class="col-9 col-sm-6 col-lg-4">
              <div class="text-center text-sm-end me-sm-4 mb-5 mb-sm-0">
                <img
                  class="img-fluid"
                  src={icon}
                  alt=""
                  data-hs-theme-appearance="default"
                />
              </div>
            </div>

            <div class="col-sm-6 col-lg-4 text-center text-sm-start">
              <h1 class="display-1 mb-0">500</h1>
              <p class="lead">
                The server encountered an internal error or misconfiguration and
                was unable to complete your request.
              </p>
              <div class="justify-content-center align-items-center">
                <button
                  class="btn btn-primary align-content-center"
                  onClick={() => navigate(-2)}
                  type="button"
                >
                  <ArrowBackIosNewRounded sx={{ width: "18px" }} /> Go back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Error500;
