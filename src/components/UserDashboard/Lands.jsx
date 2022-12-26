import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getCookie, isAuth } from "../../helpers/auth";
import AnncouncentSm from "./AnncouncentSm";
import LandTable from "./LandTable";

const Lands = () => {
  const [claims, setClaims] = useState([]);
  let aClaims = [];
  let pClaims = [];
  claims.map((claim) => claim.status === "Approved" && aClaims.push(claim));
  claims.map((claim) => claim.status === "Pending" && pClaims.push(claim));

  const token = getCookie("token");

  useEffect(() => {
    const fetchLands = () => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/user/claims/${isAuth()._id}`, {
          headers: {
            token: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setClaims(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchLands();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="row">
      <div className="col-lg-8">
        <div class="row">
          <div class="col-sm-6 col-lg-4 mb-3 mb-lg-5">
            <div class="card h-100">
              <div class="card-body">
                <h6 class="card-subtitle mb-2">Approved Requests</h6>
                <div class="row align-items-center gx-2">
                  <div class="col">
                    <span class="js-counter display-4 text-dark">
                      {aClaims.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-4 mb-3 mb-lg-5">
            <div class="card h-100">
              <div class="card-body">
                <h6 class="card-subtitle mb-2">Pending Requests</h6>

                <div class="row align-items-center gx-2">
                  <div class="col">
                    <span class="js-counter display-4 text-dark">
                      {pClaims.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-4 mb-3 mb-lg-5">
            <div class="card h-100">
              <div class="card-body">
                <h6 class="card-subtitle mb-2">Total Claims</h6>

                <div class="row align-items-center gx-2">
                  <div class="col">
                    <span class="js-counter display-4 text-dark">
                      {claims.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card mt-4">
          <div className="card-body">
            <LandTable claims={claims} />
          </div>
        </div>
      </div>
      <AnncouncentSm />
    </div>
  );
};

export default Lands;
