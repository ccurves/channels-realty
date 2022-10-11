import React from "react";
import icon from "../../../assets/illustrations/oc-referrals.svg";

const Step1 = ({ setStep }) => {
  return (
    <div class="card">
      <div class="card-header">
        <h2 class="card-title h4">Become An Influencer</h2>
      </div>

      <div class="card-body justify-content-sm-center text-center">
        <div class="">
          <img
            class="avatar avatar-xl avatar-4x3 mb-5"
            src={icon}
            alt=""
            data-hs-theme-appearance="default"
          />

          <h4>Join the channels affilate program !</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            quasi earum dolorem ex vel quis.
          </p>

          {/* <ActivateButton /> */}
        </div>
      </div>
      <div class="card-footer d-flex align-items-center">
        <div class="ms-auto">
          <button
            type="button"
            onClick={() => setStep("step2")}
            class="btn btn-primary"
          >
            Next <i class="fa fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step1;
