import React from "react";
import { isAuth } from "../../helpers/auth";
import { getPercent } from "../../helpers/utilities";
import ProgressBar from "./ProgressBar";

const TaskProgressComponent = ({ sqm, perc }) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-7 ">
            <div class="card-header card-header-content-between">
              <h4 class="card-header-title">{sqm}sqm</h4>

              <h4 class="card-header-title" style={{ fontWeight: 400 }}>
                {isAuth().role === "affilate" &&
                  getPercent(
                    isAuth().refferals.length,
                    process.env.REACT_APP_AFFILATE_GOAL / Number(perc)
                  )}
                {isAuth().role === "user" &&
                  getPercent(
                    isAuth().refferals.length,
                    process.env.REACT_APP_USER_GOAL / Number(perc)
                  )}
                %
              </h4>
            </div>
            <div className="row">
              <div className="col-12">
                <div class="progress rounded-pill" style={{ height: "17px" }}>
                  {isAuth().role === "affilate" && (
                    <ProgressBar
                      refferals={isAuth().refferals.length}
                      goal={process.env.REACT_APP_AFFILATE_GOAL / Number(perc)}
                    />
                  )}
                  {isAuth().role === "user" && (
                    <ProgressBar
                      refferals={isAuth().refferals.length}
                      goal={process.env.REACT_APP_USER_GOAL / Number(perc)}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="col-4 ">
            {" "}
            <button class="btn btn-primary">Claim</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskProgressComponent;
