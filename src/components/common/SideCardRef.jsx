import { ContentCopyRounded } from "@mui/icons-material";
import React from "react";
import { isAuth } from "../../helpers/auth";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";

const SideCardRef = () => {
  var host = window.location.protocol + "//" + window.location.host;
  const handleCopy = () => {
    toast.success("Referral link copied!");
  };
  return (
    <div class=" col-lg-4">
      <div class="card card-centered mb-3 mb-lg-5 ">
        <div class="card-body bg-light py-10">
          <div className="text-center">
            <small class="text-cap">Your Referral Link:</small>

            <div class="input-group">
              <input
                id="referralCode"
                type="text"
                class="form-control"
                readonly
                value={`${host}/sign-up?refCode=${isAuth().refLink}`}
              />
              <div class="input-group-append">
                <CopyToClipboard
                  text={`${host}/sign-up?refCode=${isAuth().refLink}`}
                  onCopy={handleCopy}
                >
                  <span
                    class="js-clipboard btn btn-white"
                    style={{ cursor: "pointer" }}
                  >
                    <ContentCopyRounded
                      sx={{ color: "#D56C2D", width: "22px", margin: "0 7px" }}
                    />
                  </span>
                </CopyToClipboard>
                {/* <a
                  class="js-clipboard btn btn-white"
                  href=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Copy to clipboard"
                  data-hs-clipboard-options='{
                    "type": "tooltip",
                    "successText": "Copied!",
                    "contentTarget": "#referralCode",
                    "classChangeTarget": "#referralCodeIcon",
                    "defaultClass": "bi-clipboard",
                    "successClass": "bi-check"
                   }'
                >
            
                  <ContentCopyRounded
                    sx={{ color: "#D56C2D", width: "22px", margin: "0 7px" }}
                  />
                </a> */}
              </div>
            </div>

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
