import {
  AccountBalanceWalletRounded,
  AssignmentRounded,
  GridViewRounded,
  LandscapeRounded,
  ManageAccountsRounded,
  SupervisorAccountRounded,
  SupportRounded,
  Verified,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import { isAuth } from "../../helpers/auth";
import { capitalize, getPercent, truncate } from "../../helpers/utilities";
import Logout from "../common/Logout";

const Sidebar = ({ page }) => {
  return (
    <div class="navbar-expand-lg">
      <button
        class="navbar-toggler  w-100 mb-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarVerticalNavMenu"
        aria-controls="navbarVerticalNavMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="d-flex justify-content-between align-items-center">
          <span class="navbar-toggler-text text-primary">Dashboard</span>
          <span class="navbar-toggler-default">
            <i class=" fa fa-list"></i>
          </span>
          <span class="navbar-toggler-toggled">
            <i class="fa fa-times"></i>
          </span>
        </span>
      </button>

      <aside
        id="navbarVerticalNavMenu"
        class="js-navbar-vertical-aside navbar navbar-vertical navbar-vertical-absolute navbar-vertical-detached navbar-shadow navbar-collapse collapse bg-white rounded-2"
      >
        <div class="navbar-vertical-container">
          <div class="navbar-vertical-footer-offset">
            <div class="navbar-vertical-content">
              <div
                id="navbarVerticalMenu"
                class="nav nav-pills nav-vertical card-navbar-nav"
              >
                <div className="p-4  mb-3">
                  <div class="d-flex  align-items-center">
                    <span class="d-flex  align-items-center me-2">
                      <div class="flex-shrink-0">
                        <div class="avatar avatar-sm avatar-soft-primary avatar-circle">
                          <span class="avatar-initials">
                            {capitalize(isAuth().firstname.charAt(0))}
                          </span>
                          <span class="avatar-status avatar-sm-status avatar-status-warning"></span>
                        </div>
                      </div>
                      <div class="flex-grow-1 ms-3 ">
                        <h5 class="text-hover-primary mb-0">
                          {capitalize(isAuth().firstname) +
                            " " +
                            capitalize(isAuth().lastname)}
                        </h5>
                        <span class=" text-nowrap fs-6 ">
                          {truncate(isAuth().email)}
                        </span>
                      </div>
                    </span>
                    <div class=" ms-auto">
                      <div class="flex-shrink-0">
                        {isAuth().affilate?.status === "Verified" && (
                          <Verified sx={{ color: "#D56C2D", width: "22px" }} />
                        )}
                      </div>
                    </div>
                  </div>

                  <div class="d-flex justify-content-between align-items-center mt-3">
                    <div class="progress flex-grow-1">
                      {isAuth().role === "affilate" && (
                        <div
                          class="progress-bar bg-primary"
                          role="progressbar"
                          style={{
                            width: `${getPercent(
                              isAuth().refferals.length,
                              process.env.REACT_APP_AFFILATE_GOAL
                            )}%`,
                          }}
                          aria-valuenow={isAuth().refferals.length}
                          aria-valuemin="0"
                          aria-valuemax={process.env.REACT_APP_AFFILATE_GOAL}
                        ></div>
                      )}
                      {isAuth().role === "user" && (
                        <div
                          class="progress-bar bg-primary"
                          role="progressbar"
                          style={{
                            width: `${getPercent(
                              isAuth().refferals.length,
                              process.env.REACT_APP_USER_GOAL
                            )}%`,
                          }}
                          aria-valuenow={isAuth().refferals.length}
                          aria-valuemin="0"
                          aria-valuemax={process.env.REACT_APP_USER_GOAL}
                        ></div>
                      )}
                    </div>
                  </div>
                </div>
                <div class="nav-item">
                  <Link
                    to="/"
                    class={page === "index" ? "nav-link active" : "nav-link "}
                    role="button"
                  >
                    <GridViewRounded
                      sx={{ color: "#667085", width: "22px", margin: "0 7px" }}
                    />
                    <span class="nav-link-title">Overview</span>
                  </Link>
                </div>

                <div class="nav-item">
                  <Link
                    to="/task"
                    class={page === "task" ? "nav-link active" : "nav-link "}
                    role="button"
                  >
                    {" "}
                    <AssignmentRounded
                      sx={{ color: "#667085", width: "22px", margin: "0 7px" }}
                    />
                    <span class="nav-link-title">Task</span>
                  </Link>
                </div>

                <div class="nav-item">
                  <Link
                    to="/profile"
                    class={
                      page === "profile" ? "nav-link active " : "nav-link "
                    }
                    role="button"
                  >
                    {" "}
                    <ManageAccountsRounded
                      sx={{ color: "#667085", width: "22px", margin: "0 7px" }}
                    />
                    <span class="nav-link-title">Profile</span>
                  </Link>
                </div>
                {isAuth().role === "affilate" && (
                  <div class="nav-item">
                    <Link
                      to="/affilate/withdraw"
                      class={
                        page === "withdraw" ? "nav-link active" : "nav-link "
                      }
                      role="button"
                    >
                      {" "}
                      <AccountBalanceWalletRounded
                        sx={{
                          color: "#667085",
                          width: "22px",
                          margin: "0 7px",
                        }}
                      />
                      <span class="nav-link-title">Withdraw</span>
                    </Link>
                  </div>
                )}

                {isAuth().role === "affilate" && (
                  <div class="nav-item">
                    <Link
                      to="/affilate/referrals"
                      class={
                        page === "referrals" ? "nav-link active" : "nav-link "
                      }
                      role="button"
                    >
                      {" "}
                      <SupervisorAccountRounded
                        sx={{
                          color: "#667085",
                          width: "22px",
                          margin: "0 7px",
                        }}
                      />
                      <span class="nav-link-title">Referrals</span>
                    </Link>
                  </div>
                )}
                {isAuth().role === "affilate" && (
                  <div class="nav-item">
                    <Link
                      to="/affilate/land"
                      class={page === "land" ? "nav-link active" : "nav-link "}
                      role="button"
                    >
                      {" "}
                      <LandscapeRounded
                        sx={{
                          color: "#667085",
                          width: "22px",
                          margin: "0 7px",
                        }}
                      />
                      <span class="nav-link-title">Land</span>
                    </Link>
                  </div>
                )}

                <div class="nav-item mt-5">
                  <a class="nav-link" href="/" data-placement="left">
                    <SupportRounded
                      sx={{ color: "#667085", width: "22px", margin: "0 7px" }}
                    />
                    <span class="nav-link-title">Support</span>
                  </a>
                </div>
                <div class="nav-item">
                  <Logout />
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
