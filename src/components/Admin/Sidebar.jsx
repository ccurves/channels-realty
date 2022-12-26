import {
  GridViewRounded,
  Groups2Rounded,
  LandscapeRounded,
  PaymentsRounded,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import { isAuth } from "../../helpers/auth";
import { capitalize, truncate } from "../../helpers/utilities";
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
                        {/* <Verified sx={{ color: "#D56C2D", width: "22px" }} /> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="nav-item">
                  <Link
                    to="/admin"
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
                    to="/admin/land-claims"
                    class={
                      page === "land-claims" ? "nav-link active" : "nav-link "
                    }
                    role="button"
                  >
                    <LandscapeRounded
                      sx={{ color: "#667085", width: "22px", margin: "0 7px" }}
                    />
                    <span class="nav-link-title">Land Request</span>
                  </Link>
                </div>
                <div class="nav-item">
                  <Link
                    to="/admin/withdrawal-reqs"
                    class={
                      page === "withdrawal-reqs"
                        ? "nav-link active"
                        : "nav-link "
                    }
                    role="button"
                  >
                    <PaymentsRounded
                      sx={{ color: "#667085", width: "22px", margin: "0 7px" }}
                    />
                    <span class="nav-link-title">Withdrawal Requests</span>
                  </Link>
                </div>
                <div class="nav-item">
                  <Link
                    to="/admin/affilate-requests"
                    class={page === "aff-req" ? "nav-link active" : "nav-link "}
                    role="button"
                  >
                    <Groups2Rounded
                      sx={{ color: "#667085", width: "22px", margin: "0 7px" }}
                    />
                    <span class="nav-link-title">Affilate Request</span>
                  </Link>
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
