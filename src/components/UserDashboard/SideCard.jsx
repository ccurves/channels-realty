import React from "react";
import { Link } from "react-router-dom";

const SideCard = () => {
  return (
    <div class=" col-lg-4">
      <div class="card card-centered mb-3 mb-lg-5 ">
        <div class="card-body bg-light py-10">
          <div className="text-center">
            <h3 class=" ">
              Earn 6k per referral if you become an Influencer, click this
              button to become an Influencer.
            </h3>
            <Link to="/affilate/apply">
              <button className="btn btn-outline-primary btn-light mt-4">
                Become an Influencer
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideCard;
