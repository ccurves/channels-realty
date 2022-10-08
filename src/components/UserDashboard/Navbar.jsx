import React from "react";
import logo from "../../assets/img/logo.svg";

const Navbar = () => {
  return (
    <header id="header" class="navbar navbar-expand-lg navbar-light ">
      <div class="container">
        <div class="navbar-nav-wrap">
          <a class="navbar-brand" href="/" aria-label="Front">
            <img
              class="navbar-brand-logo"
              src={logo}
              alt="Logo"
              data-hs-theme-appearance="default"
            />
          </a>

          <div class="navbar-nav-wrap-content-end">
            <ul class="navbar-nav">
              <li class="nav-item d-none d-md-inline-block">
                <div class="dropdown">
                  <button
                    type="button"
                    class="btn btn-ghost-secondary btn-icon active bg-light-primary"
                    id="navbarNotificationsDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-auto-close="outside"
                    data-bs-dropdown-animation
                  >
                    <i class="fa fa-bell"></i>
                    <span class="btn-status btn-sm-status btn-status-danger"></span>
                  </button>
                </div>
              </li>

              <li class="nav-item d-none d-sm-inline-block">
                <div class="">
                  <div class="d-none d-lg-block">
                    <div class="input-group input-group-merge navbar-input-group">
                      <div class="input-group-prepend input-group-text">
                        <i class="fa fa-search"></i>
                      </div>

                      <input
                        type="search"
                        class="js-form-search form-control"
                        placeholder="Search "
                        aria-label="Search "
                        data-hs-form-search-options='{
                         "clearIcon": "#clearSearchResultsIcon",
                         "dropMenuElement": "#searchDropdownMenu",
                         "dropMenuOffset": 20,
                         "toggleIconOnFocus": true,
                         "activeClass": "focus"
                       }'
                      />
                      <a class="input-group-append input-group-text" href="">
                        <i
                          id="clearSearchResultsIcon"
                          class="bi-x-lg"
                          style={{ display: "none" }}
                        ></i>
                      </a>
                    </div>
                  </div>
                  <button
                    class="js-form-search js-form-search-mobile-toggle btn btn-ghost-secondary btn-icon rounded-circle d-lg-none"
                    type="button"
                    data-hs-form-search-options='{
                         "clearIcon": "#clearSearchResultsIcon",
                         "dropMenuElement": "#searchDropdownMenu",
                         "dropMenuOffset": 20,
                         "toggleIconOnFocus": true,
                         "activeClass": "focus"
                       }'
                  >
                    <i class="bi-search"></i>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
