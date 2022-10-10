import React from "react";
import { isAuth } from "../../helpers/auth";
import AnncouncentSm from "../UserDashboard/AnncouncentSm";
import Transcations from "./Transcations";
import WithdrawModal from "./WithdrawModal";

const Withdraw = () => {
  return (
    <div className="row">
      <div className="col-lg-8">
        <div className="card">
          <div class="card-body">
            <div class="row col-lg-divider">
              <div class="">
                <div class="row">
                  <div class="col-sm-6 col-lg-12">
                    <div
                      class="d-flex  flex-column"
                      style={{ minHeight: "9rem" }}
                    >
                      <h6 class="card-subtitle">Refferal Bouns</h6>
                      <span class="d-block display-5 text-dark mb-3 me-3 mt-3">
                        NGN{isAuth().wallet.refBouns}
                      </span>
                      <div class="d-flex justify-content-start d-print-none gap-3">
                        <button
                          class="btn btn-primary text-center"
                          data-bs-toggle="modal"
                          data-bs-target="#uploadFilesModal"
                        >
                          Withdraw funds
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card mt-4">
          <div className="card-body">
            <Transcations />
          </div>
        </div>
      </div>
      <AnncouncentSm />
      <WithdrawModal />
    </div>
  );
};

export default Withdraw;
