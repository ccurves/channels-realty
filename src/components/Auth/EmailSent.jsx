import React from "react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import icon from "../../assets/illustrations/oc-email-verification.svg";

const EmailSent = () => {
  const search = useLocation().search;
  const email = new URLSearchParams(search).get("email");
  const type = new URLSearchParams(search).get("type");

  return (
    <main id="content" role="main" class="main">
      <div class="container py-5 py-sm-7">
        <a class="d-flex justify-content-center mb-5" href="/">
          <img class="zi-2" src={logo} alt="" style={{ width: "8rem" }} />
        </a>

        <div class="mx-auto" style={{ maxWidth: "30rem" }}>
          <div class="card card-lg mb-5">
            <div class="card-body text-center">
              <div class="mb-4">
                <img
                  class="avatar avatar-xxl avatar-4x3"
                  src={icon}
                  alt=""
                  data-hs-theme-appearance="default"
                />
              </div>
              {type === "reset" && <h1 class="display-5">Reset link sent</h1>}
              {type === "verify" && (
                <h1 class="display-5">Verify your email</h1>
              )}

              <p class="mb-1">We've sent a link to your email address:</p>

              <span class="d-block text-dark fw-semibold mb-1">{email}</span>

              <p>Please follow the link inside to continue.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EmailSent;
