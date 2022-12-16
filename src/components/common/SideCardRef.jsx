import React from "react";
import { useState } from "react";
import { isAuth } from "../../helpers/auth";
import RefLinkComponent from "./RefLinkComponent";
import SocialShare from "./SocialShare";

const SideCardRef = () => {
  const [visible, setVisible] = useState(false);
  const host = window.location.protocol + "//" + window.location.host;
  const link = `${host}/sign-up?refCode=${isAuth().refLink}`;

  return (
    <div class=" col-lg-4">
      <div class="card card-centered mb-3 mb-lg-5 ">
        <div class="card-body bg-light py-10">
          <div className="text-center">
            <small class="text-cap">Your Referral Link:</small>

            <RefLinkComponent link={link} />

            <button
              className="btn btn-outline-primary btn-light mt-4"
              onClick={() => setVisible(!visible)}
            >
              Share referral link
            </button>
            {visible && <SocialShare link={link} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideCardRef;
