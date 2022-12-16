import React from "react";
import { isAuth } from "../../helpers/auth";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import { ContentCopyRounded } from "@mui/icons-material";

const RefLinkComponent = () => {
  var host = window.location.protocol + "//" + window.location.host;
  const handleCopy = () => {
    toast.success("Referral link copied!");
  };
  return (
    <div class="input-group">
      <input
        id="referralCode"
        type="text"
        class="form-control"
        readOnly
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
      </div>
    </div>
  );
};

export default RefLinkComponent;
