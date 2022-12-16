import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import icon from "../../assets/illustrations/oc-maintenance.svg";
import { getCookie, isAuth, updateUser } from "../../helpers/auth";

const ClaimModal = ({ sqm }) => {
  const handleClaim = async () => {
    const token = getCookie("token");
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/user/claim`,
        {
          userId: isAuth()._id,
          sqft: sqm,
        },
        {
          headers: {
            token: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        updateUser(res.data.user, () => {
          toast.success(res.data.message);
        });
        window.location.reload();
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.error);
      });
  };
  return (
    <div
      class="modal fade"
      id={`claimModal${sqm}`}
      tabindex="-1"
      aria-labelledby="claimModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title h3" id="uploadFilesModalLabel">
              Claim Your Land
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row justify-content-sm-center text-center ">
              <img
                class="card-img mb-5"
                src={icon}
                alt=""
                style={{ width: "250px" }}
                data-hs-theme-appearance="default"
              />

              <h4>Claim {sqm} sqm of land </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perferendis eos molestiae nulla cupiditate quo.
              </p>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-white" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="button" class="btn btn-primary" onClick={handleClaim}>
              Place Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimModal;
