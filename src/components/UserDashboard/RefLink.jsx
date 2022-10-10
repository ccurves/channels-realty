import { LandscapeRounded } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import { isAuth } from "../../helpers/auth";
import ProgressBar from "../common/ProgressBar";
import RefLinkComponent from "../common/RefLinkComponent";

const RefLink = ({ page }) => {
  return (
    <div class="card mb-3 mb-lg-5 ">
      <div className="card-body">
        <div
          class={
            page === "affilate"
              ? "col-sm-6 col-md-5 col-lg-8"
              : "col-sm-6 col-md-5 col-lg-4"
          }
        >
          <small class="text-cap">Your Referral id:</small>

          <RefLinkComponent />
        </div>
        <div class="d-flex align-items-md-center p-lg-3 p-2 mt-3">
          <div class="flex-shrink-0 text-center">
            <span class="display-3 text-dark">{isAuth().refferals.length}</span>
            <span class="d-block">Total Refferals</span>
          </div>

          <div class="flex-grow-1 ms-3 mt-3">
            <div class="row mx-md-n3">
              <div class="col-md-9 col-lg-10 column-md-divider px-md-4 align-items-md-center">
                <div class="progress rounded-pill">
                  <ProgressBar
                    refferals={isAuth().refferals.length}
                    goal={process.env.REACT_APP_USER_GOAL}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {page === "affilate" ? (
          <div class="col-sm-auto p-lg-3 p-2">
            <Link to="/affilate/withdraw">
              <button class="btn btn-primary ">Make Withdrawal</button>
            </Link>
          </div>
        ) : (
          <div class="col-sm-auto p-lg-3 p-2">
            <a
              class="btn btn-disabled btn-outline"
              href=""
              data-bs-toggle="modal"
              data-bs-target="#newProjectModal"
            >
              <LandscapeRounded /> Claim Land
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default RefLink;
