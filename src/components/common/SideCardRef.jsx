import React from "react";
import RefLinkComponent from "./RefLinkComponent";

const SideCardRef = () => {
  return (
    <div class=" col-lg-4">
      <div class="card card-centered mb-3 mb-lg-5 ">
        <div class="card-body bg-light py-10">
          <div className="text-center">
            <small class="text-cap">Your Referral Link:</small>

            <RefLinkComponent />

            <button className="btn btn-outline-primary btn-light mt-4">
              Share referral link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideCardRef;
