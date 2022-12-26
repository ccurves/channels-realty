import axios from "axios";
import React, { useState } from "react";
import Confetti from "react-dom-confetti";
import toast from "react-hot-toast";
import icon from "../../assets/illustrations/oc-maintenance.svg";
import { getCookie, isAuth, updateUser } from "../../helpers/auth";

const ClaimModal = ({ sqm }) => {
  const [active, setActive] = useState(false);

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
        setActive(true);
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

  const config = {
    angle: 90,
    spread: 360,
    startVelocity: "27",
    elementCount: "81",
    dragFriction: 0.12,
    duration: "2690",
    stagger: "6",
    width: "24px",
    height: "19px",
    perspective: "561px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
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
          <Confetti active={active} config={config} />

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
