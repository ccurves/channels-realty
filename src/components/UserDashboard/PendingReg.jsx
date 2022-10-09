import React from "react";
import icon from "../../assets/illustrations/oc-collaboration.svg";
import { isAuth } from "../../helpers/auth";
import ActivateButton from "../common/ActivateButton";

const PendingReg = () => {
  return (
    <div class="content container-fluid">
      <div class="row justify-content-sm-center text-center py-10">
        <div class="col-sm-7 col-md-5">
          <img
            class="img-fluid mb-5"
            src={icon}
            alt=""
            data-hs-theme-appearance="default"
          />

          <h4>Hey {isAuth().firstname}, your account isn't activated !</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            quasi earum dolorem ex vel quis.
          </p>

          <ActivateButton />
        </div>
      </div>
    </div>
  );
};

export default PendingReg;
