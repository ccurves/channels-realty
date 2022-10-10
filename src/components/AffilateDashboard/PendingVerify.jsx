import React from "react";
import icon from "../../assets/illustrations/oc-hi-five.svg";

const PendingVerify = () => {
  return (
    <div class="content container-fluid">
      <div class="row justify-content-sm-center text-center py-10">
        <div class="col-sm-7 col-md-5">
          <img
            class="card-img mb-5"
            src={icon}
            alt=""
            data-hs-theme-appearance="default"
          />

          <h4>Application submitted !</h4>
          <p>
            Your application has been submitted and awaiting review from the
            commitee
          </p>
          <button type="button" class="btn btn-primary">
            Back to home
          </button>
        </div>
      </div>
    </div>
  );
};

export default PendingVerify;
